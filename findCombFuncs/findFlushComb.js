const findFlushComb = combArray => {
    const suitArray = combArray.map(e => e.suit);

    const uniqueSuit = [...new Set(suitArray)];

    const suitCounts = uniqueSuit
        .map(card =>{
            const count = suitArray.filter(el => el === card).length;

            return {
                suit: card,
                count,
            }
        })
        .sort((prev, next) => next.count - prev.count);

    const flushComb =[];
    flushComb.push(suitCounts[0].count, suitCounts[0].suit);


    const allCombs = [];

    if (flushComb[0] >= 5) {
        const flushArray = combArray.filter(el => el.suit === flushComb[1]);
        flushArray.sort((prev,next) => next.weight - prev.weight);
        
        if (flushArray[0].weight - flushArray[4].weight === 4) {
            if (flushArray[0].weight == 14) allCombs.push(9);
            
            allCombs.push(8);
        }

        allCombs.push(5);
    }
    
    return allCombs;
}

module.exports = findFlushComb;