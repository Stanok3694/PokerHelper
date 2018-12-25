const findSimpleStraight = (cardsArray) => {
  const weightArr = cardsArray.map(e => e.weight);

  const uniqueCards = [...new Set(weightArr)];

  uniqueCards.sort((prev, next) => next - prev);


  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < uniqueCards.length - 4; i++) {
    if (uniqueCards[i] - uniqueCards[i + 4] === 4) return 4;
  }

  return 0;
};

module.exports = findSimpleStraight;
