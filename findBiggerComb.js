const findFlushComb = require('./findCombFuncs/findFlushComb');
const findPairsCombs = require('./findCombFuncs/findPairsCombs');
const findSimpleStraight = require('./findCombFuncs/findSimpleStraight');
const dictionary = require('./dictionary');

const findBiggerComb = combArr => {
    const wArr = [...combArr.hand, ...combArr.table]
    
    //const allCombs;
    const allCombs = [0,...findFlushComb(wArr), ...findPairsCombs(wArr), findSimpleStraight(wArr)];
    
    allCombs.sort((prev, next) => next - prev);
    
    const result = dictionary.find(dictionary => dictionary.value == allCombs[0]);
    return result;
}

module.exports = findBiggerComb;