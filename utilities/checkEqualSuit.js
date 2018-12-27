const prepareCardsPool = require('./prepareCardsPool');
const randomizeS = require('./randomSuit');


const checkSuit = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    arr[i].suit = randomizeS();
  }
  const arrInfo = prepareCardsPool(arr, 'suit');
  if (arrInfo[0].count > 4) checkSuit(arr);
  const fixedArray = arr;
  return fixedArray;
};

module.exports = checkSuit;
