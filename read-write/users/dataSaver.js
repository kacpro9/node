const fs = require("fs/promises");
const path = require("path");

async function saveData(fileName, folderName, overwrite = false) {
  console.log("Odczytywanie danych z pliku:", fileName);

  try {
    await fs.mkdir(folderName, { recursive: true });

    const rawData = await fs.readFile(fileName, "utf8");
    const users = JSON.parse(rawData);

    for (const user of users) {
      const { name, username, email, adress } = user;

      const content = [
        name,
        username,
        email,
        adress?.street,
        adress?.zipcode,
        adress?.city,
      ].join("\n");

      const fileName = `${name}_${username}.txt`.replace(/\s+/g, "_");
      const filePath = path.join(folderName, fileName);

      try {
        await fs.access(filePath);
        if (!overwrite) {
          console.log(
            `Plik ${fileName} już istnieje. Użyj overwrite: true, aby go nadpisać.`
          );
          continue;
        }
      } catch {
        // Plik nie istnieje, możemy go utworzyć
      }
      await fs.writeFile(filePath, content, "utf8");
      console.log(
        `Zapisano dane użytkownika ${name} ${username} do pliku ${fileName}`
      );
    }
  } catch (error) {
    console.error("Błąd podczas odczytu lub zapisu pliku:", error);
  }
}
module.exports = saveData;
