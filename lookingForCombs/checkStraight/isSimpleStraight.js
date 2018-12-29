const findSimpleStraight = (cardsArray) => {
  const valueArr = cardsArray.map(e => e.value);

  const uniqueCards = [...new Set(valueArr)];

  uniqueCards.sort((prev, next) => next - prev);


  for (let i = 0; i < uniqueCards.length - 4; i += 1) {
    if (uniqueCards[i] - uniqueCards[i + 4] === 4) return true;
  }

  return false;
};

module.exports = findSimpleStraight;
