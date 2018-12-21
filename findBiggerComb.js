const findFlushComb = require('./findCombFuncs/findFlushComb');
const findPairsCombs = require('./findCombFuncs/findPairsCombs');
const findSimpleStraight = require('./findCombFuncs/findSimpleStraight');

const findBiggerComb = combArr => {
    const wArr = [...combArr.hand, ...combArr.table]
    
    //const allCombs;
    const allCombs = [...findFlushComb(wArr), ...findPairsCombs(wArr), findSimpleStraight(wArr)];
    return allCombs;   
}

module.exports = findBiggerComb;