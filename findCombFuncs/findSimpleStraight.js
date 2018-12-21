const findSimpleStraight = combArr => {
    const weightArr = combArr.map(e => e.weight);

    const uniqueCards = [...new Set(weightArr)];

    uniqueCards.sort((prev, next) => next - prev);

    //Hello W. E. T.
    for (i=0; i < uniqueCards.length - 4; i++) {
        if (uniqueCards[i] - uniqueCards[i+4] === 4) return [`Straight: from ${uniqueCards[i]} to ${uniqueCards[i+4]}`, 4];
    }
    return ['No combinations', 0];
}

module.exports = findSimpleStraight;