const deck = require('../../dictionary and other/cardDeck');
const makeStraight = require('../makeSome/makeStraight');
const randomize = require('../../utilities/randomInteger');
const fill = require('../../utilities/fill');

const makeFlush = (type) => {
  const copyDeck = deck;
  const pool = randomize(5, 7);
  const oneSuitArr = copyDeck.splice(randomize(0, 3) * 12, 12);
  let flushArr = fill(oneSuitArr, 5);
  flushArr = [...fill(copyDeck, pool - 5)];
  if (type === 'royalflush') flushArr = makeStraight(true);
  if (type === 'straightflush') flushArr = makeStraight();
  return flushArr;
};

module.exports = makeFlush;
