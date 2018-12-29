const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findFlush = (cardsArray) => {
  const prepCardsArr = prepareCardsPool(cardsArray, 'suit');
  if (prepCardsArr[0].count >= 5) return true;
  return false;
};

module.exports = findFlush;
