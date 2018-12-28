const findCombination = require('./findCombination');
const findRoyalStraight = require('./checkFlush/isRoyalStraight');
const findStraightFlush = require('./checkFlush/isStraightFlush');
const findSimpleFlush = require('./checkFlush/isSimpleFlush');
const findSimpleStraight = require('./checkStraight/isSimpleStraight');
const findPair = require('./checkPairs/isPair');
const findTwoPairs = require('./checkPairs/isTwoPairs');
const findThree = require('./checkPairs/isThree');
const findFour = require('./checkPairs/isFour');
const findFullhouse = require('./checkPairs/isFullhouse');

const findBiggerComb = (cardsPool) => {
  const cardsArray = [...cardsPool.hand, ...cardsPool.table];
  const allCombinations = [
    0,

    findRoyalStraight(cardsArray),
    findSimpleFlush(cardsArray),
    findStraightFlush(cardsArray),

    findPair(cardsArray),
    findTwoPairs(cardsArray),
    findThree(cardsArray),
    findFour(cardsArray),
    findFullhouse(cardsArray),

    findSimpleStraight(cardsArray),
  ];

  allCombinations.sort((prev, next) => next - prev);


  return findCombination(allCombinations[0]);
};

module.exports = findBiggerComb;
