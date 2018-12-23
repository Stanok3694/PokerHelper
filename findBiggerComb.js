const findFlushComb = require('./findCombFuncs/findFlushComb');
const findPairsCombs = require('./findCombFuncs/findPairsCombs');
const findSimpleStraight = require('./findCombFuncs/findSimpleStraight');
const dictionary = require('./dictionary');

// SO: Code Review #4:

// combArr is confusing name for variable,
// because now it is not actually array of combinationa or smth like that
// it is object with two arrays - hand and table.

// it should be renamed - probably it is allCards or cardsPool or combinationsPool.

const findBiggerComb = combArr => {
    const wArr = [...combArr.hand, ...combArr.table]
    
    // SO: Code Review #5: 
    
    // all unused code should be removed. u have git - u can restore anything.
    //const allCombs; <- SO: remove it.

    // P.S. I use comments for code review notes or for ToDo's purposes or for docs.
    // as said one powerfull Roman - code is the best documentation (c)
    // and we try to create self-documented code with clear namings.

    // So, u should try too. And remove all my comments after reading.

    // SO: minor style change. u may try to write compact functions and declarations.

    const allCombs = [
        0,
        // SO: Code Review #6:

        /* 
            1.  in findFlushComb and findPairsCombs we had the similar code at start:
                it is related with finding target things like weight or suit.
                So, there are two ways:
                    a)  u can create one common function which can take two args:
                        prepareCards(
                            targetArray, // it is 're cards
                            targetProperty, // it can be "weight" or "suite"
                        )

                        then u can use it like that:
                        prepareCards(combArra, "suite")

                        and in code of prepareCards instead of e.suit -> e[targetProperty]
                    
                    b)  u can use both 're code like u're using it right now, BUT u should
                        extract it into function like: 
                        - prepareFlashCombCards(combArray)
                        - preparePairsCombs(combArray).

                Both solutions can be implemented in different applications. For this one,
                I think that u should use a) way, 'cause we have not got any complicated logic
                and this way looks good.

            2.  u still use this construction:
                const flushComb =[]; and then flushComb.push(...)
                instead of const flushComb = [suitCounts.count, ...];
                
                it is an overkill.

                u have already changed it in this (findBiggerComb) file, so
                u have to keep it consistent.
            
            3.  I do not understand why did u keep it in array and then used it like:
                flushComb[0] and other...?
                
                it is not declarative, it is hard to understanding for everybody who can
                watch to your code - just imagine that u will work in team where everybody
                type code like that and nobody know which feature his or her teammate have implemented.
                
                it will be a chaos.
                
                u have to try to keep your code more declarative and clear for understanding.
                even for u it could be helpfull 'cause after months u can return to some part of application
                and it could be like - what is going on? how does it works? and so on.

                for those pack of weird lines it could be like:

                const flashComb = {
                    count: suitCounts[0].count, // or higherCombCount or smth else?
                    suit: suitCounts[0].suit,
                };

                and then use it like: 

                flashComb.count >= 5 
                and 
                el.suit === flushComb.suit;
            
            4.  I am sure that in condition statements we should use something like:
                const yourSuperUnderstandableCondition = flushArray[0].weight - flushArray[4].weight === 4;
                and then if (yourSuperUnderstandableCondition) { ... }

                and moreover:
                function isFlushRoyalComb(flushArr) {
                    return flushArray[0].weight - flushArray[4].weight === 4;
                }

                const isFlushRoyal = isFlushRoyalComb(flushArr);
                if (isFlushRoyal) { ... };

            5.  u should use strict === as often as u can, 'cause it is JS.

            6.  I think that it is bad idea to push here all of possible flush combinations
                'cause u have the dictionary with values and names of combinations
                and u have to find the combination and set only the higher as returned value 
                for this function.
                
                think about it. there should be more elegant solution.
            
            7. for (i=0; ...) - u should initialize the variables. don't give up before JS.

            8. 
        */

        // it is common for function below...
        ...findFlushComb(wArr),
        // ...and for function below too.
        ...findPairsCombs(wArr),
        // Also I will prepare links in code of those functions
        // and u can find the topics from list of my notes related.

        findSimpleStraight(wArr)
    ];
    
    allCombs.sort((prev, next) => next - prev);
    
    // SO: Code Review #7
    
    // dictionary of what? you should rename it in your app business terms.

    const result = dictionary.find(dictionary => dictionary.value == allCombs[0]);
    return result;
}

module.exports = findBiggerComb;