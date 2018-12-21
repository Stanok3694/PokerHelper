const findPairsCombs = combArr => {
  const weightArr = combArr.map(e => e.weight);
  
  const uniqueCards = [...new Set(weightArr)];
  
  const cardCounts = uniqueCards
    .map(card => {
      const count = weightArr.filter(el => el === card).length;

      return {
        weight: card,
        count,
      }
    })
    .sort((prev, next) => next.count - prev.count);

  const seniorComb =[];
  seniorComb.push(cardCounts[0].count, cardCounts[0].weight, cardCounts[1].count, cardCounts[1].weight);
  
  if (seniorComb[0] === 2 && seniorComb[2] === 2) return `Two pairs: ${seniorComb[1]} and ${seniorComb[3]}`;
  if (seniorComb[0] === 2) return `Pair: ${seniorComb[1]}`;
  if (seniorComb[0] === 3 && seniorComb[2] > 1) return `Fullhouse: ${seniorComb[1]} and ${seniorComb[3]}`;
  if (seniorComb[0] === 3) return `Three of a kind: ${seniorComb[1]}`;
  if (seniorComb[0] === 4) return `Four of a kind:  ${seniorComb[1]}`;
  return 'No combinations'; 
};

module.exports = findPairsCombs;