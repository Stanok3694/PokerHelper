const findFlushComb = require('../lookingForCombs/checkFlush/isFlush');
const findPairsCombs = require('../lookingForCombs/checkPairs/isPairs');
const findSimpleStraight = require('../lookingForCombs/checkStraight/isSimpleStraight');
const combDictionary = require('../dictionary and other/combDictionary');


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
