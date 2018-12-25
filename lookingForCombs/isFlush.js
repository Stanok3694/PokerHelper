const prepareCardsPool = require('./prepareCardsPool');

const findFlushComb = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'suit');
  const flushCombinations = [];

  if (prepCardsArray[0].count >= 5) {
    const flushArray = cardsArray.filter(card => card.suit === prepCardsArray[0].suit);
    flushArray.sort((prev, next) => next.weight - prev.weight);

    if (flushArray[0].weight - flushArray[4].weight === 4) {
      if (flushArray[0].weight === 14) flushCombinations.push(9);
      // !!!!!!

      flushCombinations.push(8);
    }

    flushCombinations.push(5);
  }

  return flushCombinations;
};

module.exports = findFlushComb;
