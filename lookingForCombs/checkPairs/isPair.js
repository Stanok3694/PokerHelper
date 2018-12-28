const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findPair = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 2) return 1;
  return 0;
};

module.exports = findPair;
