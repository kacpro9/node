function getRandomInt(min, max) {
  if (min >= max) {
    throw new Error("Minimum must be less than maximum");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = getRandomInt;
