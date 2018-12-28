const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findThree = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 3) return 3;
  return 0;
};

module.exports = findThree;
