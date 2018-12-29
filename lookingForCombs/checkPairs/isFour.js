const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findPair = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 4) return true;
  return false;
};

module.exports = findPair;
