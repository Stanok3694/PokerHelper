
const prepareCardsPool = (cardsPool, cardProperty) => {
  const targetArray = cardsPool.map(card => card[cardProperty]);

  const uniqueSuitOrWeight = [...new Set(targetArray)];

  const uniquesCount = uniqueSuitOrWeight
    .map((prop) => {
      const count = targetArray.filter(el => el === prop).length;

      const res = { count };
      res[cardProperty] = prop;

      return res;
    })
    .sort((prev, next) => next.count - prev.count);

  const preparedArray = uniquesCount.splice(0, 2);

  return preparedArray;
};

module.exports = prepareCardsPool;
