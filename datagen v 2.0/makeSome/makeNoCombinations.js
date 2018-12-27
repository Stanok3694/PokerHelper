const deck = require('../../dictionary and other/cardDeck');
const randomize = require('../../utilities/randomInteger');
const fill = require('../../utilities/fill');
const checkEqualSuit = require('../../utilities/checkEqualSuit');


const makeNoComb = () => {
  const copyDeck = deck.splice(randomize(0, 3) * 13, 13);
  const noCombArr = fill(copyDeck, randomize(5, 7));
  return checkEqualSuit(noCombArr);
};

module.exports = makeNoComb;
