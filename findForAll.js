
const findForAll = combArr => {
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
  seniorComb.push(cardCounts[0].count, cardCounts[1].count);
  
  if (seniorComb[0] === 2 && seniorComb[1] === 2) return 'Two pairs';
  if (seniorComb[0] === 2) return 'Pair';
  if (seniorComb[0] === 3 && seniorComb[1] > 1) return 'Fullhouse';
  if (seniorComb[0] === 3) return 'Three';
  if (seniorComb[0] === 4) return 'Four';
  return 'nothing'; 
};

module.exports = findForAll;