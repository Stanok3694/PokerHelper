
const findForAll = combArr => {
  const weightArr = combArr.map(e => e.weight);
  
  const uniqueCards = [...new Set(weightArr)];
  
  //console.log('1 ' + uniqueCards);

  const cardCounts = uniqueCards
    .map(card => {
      const count = weightArr.filter(el => el === card).length;
      //console.log('2 ' + count);

      return {
        weight: card,
        count,
      }
    })
    .sort((prev, next) => next.count - prev.count);

  const seniorComb =[];
  seniorComb.push(cardCounts[0].count, cardCounts[1].count);

  //console.log(seniorComb);
  
  if (seniorComb[0] === 2 && seniorComb[1] === 2) return 'Two pairs';
  if (seniorComb[0] === 2) return 'Pair';
  if (seniorComb[0] === 3 && seniorComb[1] > 1) return 'Fullhouse';
  if (seniorComb[0] === 3) return 'Three';
  if (seniorComb[0] === 4) return 'Four';
  //if (seniorComb[0] === 5) return 'BINGO!';
  return 'nothing'; 
};

module.exports = findForAll;