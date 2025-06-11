function getRandomArray(min, max, length) {
  const result = [];
  if (min >= max) {
    throw new Error("Minimum must be less than maximum");
  }
  if (length <= 0) {
    throw new Error("Length must be a positive integer");
  }
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomValue);
  }
  return result;
}
module.exports = getRandomArray;
