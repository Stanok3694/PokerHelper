const prepCardsPool = require('../../utilities/prepareCardsPool');
const isStrFlush = require('./isStraightFlush');

const findRoyalStraight = (cardsArray) => {
  const prepArray = prepCardsPool(cardsArray, 'suit');
  if (isStrFlush(cardsArray)) {
    const flushArray = cardsArray.filter(card => card.suit === prepArray[0].suit);
    flushArray.sort((prev, next) => next.value - prev.value);
    if (flushArray[0].value === 14) return 9;
  }
  return 0;
};


module.exports = findRoyalStraight;
