const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findThree = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 3) return true;
  return false;
};

module.exports = findThree;
