const prepareCardsPool = require('./prepareCardsPool');
const randomizeS = require('./randomSuit');


const checkSuit = (arr) => {
  const newArray = arr.map(card => ({
    ...card,
    suit: randomizeS(),
  }));

  const arrInfo = prepareCardsPool(newArray, 'suit');
  if (arrInfo[0].count > 4) checkSuit(newArray);
  const fixedArray = newArray;
  return fixedArray;
};

module.exports = checkSuit;
