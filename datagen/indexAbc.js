const randCardsGen = require('./randomCardsPoolGenerator');
const isCardsUniq = require('./isAllCardsUnique');

const indexAbc = () => {
  let finalData;
  let isUnique = false;
  let count = 0;
  let finalDataForTest;

  while (!isUnique) {
    finalData = randCardsGen();
    finalDataForTest = finalData;
    isUnique = isCardsUniq(finalDataForTest);
    count += 1;
    if (count > 5) break;
  }
  return finalData;
};

module.exports = indexAbc;
