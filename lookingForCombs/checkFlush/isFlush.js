const prepareCardsPool = require('../../utilities/prepareCardsPool');

const findFlushComb = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'suit');
  const flushCombinations = [];

  if (prepCardsArray[0].count >= 5) {
    const flushArray = cardsArray.filter(card => card.suit === prepCardsArray[0].suit);
    flushArray.sort((prev, next) => next.value - prev.value);

    if (flushArray[0].value - flushArray[4].value === 4) {
      if (flushArray[0].value === 14) flushCombinations.push(9);
      // !!!!!!

      flushCombinations.push(8);
    }

    flushCombinations.push(5);
  }

  return flushCombinations;
};

module.exports = findFlushComb;
