const findSimpleStraight = combArr => {
    const weightArr = combArr.map(e => e.weight);

    const uniqueCards = [...new Set(weightArr)];

    uniqueCards.sort((prev, next) => next - prev);

    if (uniqueCards[0] - uniqueCards[4] === 4) return [`Straight: from ${uniqueCards[0]} to ${uniqueCards[4]}`, 4];

    return ['No combinations', 0];
}

module.exports = findSimpleStraight