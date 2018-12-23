const findFlushComb = combArray => {
    // SO: start Code Review #6.1 link: 
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

    // SO: end Code Review #6.1 link.

    // SO: start Code Review #6.2 and 6.3 link: 
    
    const flushComb =[];
    flushComb.push(suitCounts[0].count, suitCounts[0].suit);
    
    // SO: end Code Review #6.2 and 6.3 link.

    const allCombs = [];

    if (flushComb[0] >= 5) {
        const flushArray = combArray.filter(el => el.suit === flushComb[1]);
        flushArray.sort((prev,next) => next.weight - prev.weight);
        // SO: start Code Review #6.4 link: 
        if (flushArray[0].weight - flushArray[4].weight === 4) {
        // SO: end Code Review #6.4 link.

            // SO: start Code Review #6.5 link: 
            if (flushArray[0].weight == 14) allCombs.push(9);
            // SO: end Code Review #6.5 link.
            allCombs.push(8);
        }

        allCombs.push(5);
    }
    
    // SO: start and end for Code Review #6.6.
    return allCombs;
}

module.exports = findFlushComb;