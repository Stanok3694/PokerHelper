const findSimpleStraight = (cardsArray) => {
  const valueArr = cardsArray.map(e => e.value);

  const uniqueCards = [...new Set(valueArr)];

  uniqueCards.sort((prev, next) => next - prev);


  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < uniqueCards.length - 4; i++) {
    if (uniqueCards[i] - uniqueCards[i + 4] === 4) return 4;
  }

  return 0;
};

module.exports = findSimpleStraight;
