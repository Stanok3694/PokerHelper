const findSimpleStraight = combArr => {
    // SO: start Code Review #6.1 link: -- very similar.
    const weightArr = combArr.map(e => e.weight);

    const uniqueCards = [...new Set(weightArr)];

    uniqueCards.sort((prev, next) => next - prev);
    // // SO: end Code Review #6.1 link: -- but u should check it twice. 

    //Hello W. E. T. - // SO: Code Review #5.

    // SO: start Code Review #6.7 and 6.8:
    for (i=0; i < uniqueCards.length - 4; i++) {
        // SO: start Code Review #6.4 link:
        if (uniqueCards[i] - uniqueCards[i+4] === 4) return 4;
        // SO: end Code Review #6.5 link.
    }

    return 0;
    // SO: end Code Review #6.7 and 6.8.
}

module.exports = findSimpleStraight;