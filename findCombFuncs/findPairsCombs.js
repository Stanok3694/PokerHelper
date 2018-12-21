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
  
  const allCombs = [];

  if (seniorComb[0] >= 2 && seniorComb[2] === 2)  allCombs.push(2);
  if (seniorComb[0] >= 2)  allCombs.push(1);
  if (seniorComb[0] >= 3 && seniorComb[2] > 1)  allCombs.push(6);
  if (seniorComb[0] >= 3)  allCombs.push(3);
  if (seniorComb[0] >= 4)  allCombs.push(7);
  return allCombs; 
};

module.exports = findPairsCombs;