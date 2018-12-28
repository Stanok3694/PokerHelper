const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findFour = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 3 && prepCardsArray[1].count > 1) return 6;
  return 0;
};

module.exports = findFour;
