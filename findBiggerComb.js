const findFlushComb = require('./findCombFuncs/findFlushComb');
const findPairsCombs = require('./findCombFuncs/findPairsCombs');
const findSimpleStraight = require('./findCombFuncs/findSimpleStraight');

const findBiggerComb = combArr => {
    let currentComb = ['No combinations', 0];

    if (findFlushComb(combArr)[1] > currentComb[1]) {currentComb = findFlushComb(combArr)};
    if (findPairsCombs(combArr)[1] > currentComb[1]) {currentComb = findPairsCombs(combArr)};
    if (findSimpleStraight(combArr)[1] > currentComb[1]) {currentComb = findSimpleStraight(combArr)};
    return currentComb[0];
}

module.exports = findBiggerComb;