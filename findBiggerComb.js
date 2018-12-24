const findFlushComb = require('./findCombFuncs/findFlushComb');
const findPairsCombs = require('./findCombFuncs/findPairsCombs');
const findSimpleStraight = require('./findCombFuncs/findSimpleStraight');
const combDictionary = require('./combinationDictionary');


const findBiggerComb = (cardsPool) => {
  const cardsArray = [...cardsPool.hand, ...cardsPool.table];
  const allCombinations = [
    0,

    ...findFlushComb(cardsArray),

    ...findPairsCombs(cardsArray),

    findSimpleStraight(cardsArray),
  ];

  allCombinations.sort((prev, next) => next - prev);

  const result = combDictionary.find(dictionary => dictionary.value === allCombinations[0]);
  return result.combination;
};

module.exports = findBiggerComb;
