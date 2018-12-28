const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findTwoPair = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'value');
  if (prepCardsArray[0].count >= 2 && prepCardsArray[1].count === 2) return 2;
  return 0;
};

module.exports = findTwoPair;
