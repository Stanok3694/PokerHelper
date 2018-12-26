const convert = require('../objToArrConv');

const isUnique = (cardsPool) => {
  const cardsPoolArr = convert(cardsPool);
  const uniqArr = [...new Set(cardsPoolArr)];

  if (cardsPoolArr.length === uniqArr.length) return true;

  return false;
};

module.exports = isUnique;
