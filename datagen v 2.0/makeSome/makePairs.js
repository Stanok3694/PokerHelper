const randomize = require('../../utilities/randomInteger');
const deck = require('../../dictionary and other/cardDeck');
const fill = require('../../utilities/fill');


const makePairs = (type) => {
  const copyDeck = [...deck];
  const deckArray = copyDeck.splice(randomize(0, 3) * 13, 13);
  const pairArray = fill(deckArray, randomize(5, 7));
  const y = pairArray.length - 1;

  if (type === 'pair') {
    pairArray.splice(0, 1, pairArray[y]);
  } else if (type === 'two pairs') {
    pairArray.splice(0, 1, pairArray[y]);
    pairArray.splice(1, 1, pairArray[y - 1]);
  } else if (type === 'three') {
    pairArray.splice(0, 2, pairArray[y], pairArray[y]);
  } else if (type === 'four') {
    pairArray.splice(0, 3, pairArray[y], pairArray[y], pairArray[y]);
  } else if (type === 'fullhouse') {
    pairArray.splice(0, 1, pairArray[y]);
    pairArray.splice(1, 2, pairArray[y - 1], pairArray[y - 1]);
  }

  return pairArray;
};

module.exports = makePairs;
