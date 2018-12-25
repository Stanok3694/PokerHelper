const prepareCardsPool = require('./prepareCardsPool');

const findPairsCombs = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'weight');
  const allPairsCombinations = [];

  if (prepCardsArray[0].count >= 2 && prepCardsArray[1].count === 2) allPairsCombinations.push(2);
  if (prepCardsArray[0].count >= 2) allPairsCombinations.push(1);
  if (prepCardsArray[0].count >= 3 && prepCardsArray[1].count > 1) allPairsCombinations.push(6);
  if (prepCardsArray[0].count >= 3) allPairsCombinations.push(3);
  if (prepCardsArray[0].count >= 4) allPairsCombinations.push(7);
  return allPairsCombinations;
};

module.exports = findPairsCombs;
