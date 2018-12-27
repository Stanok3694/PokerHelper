const randomize = require('../../utilities/randomInteger');
const cutExess = require('../../utilities/cutExess');
const deck = require('../../dictionary and other/cardDeck');


const makeStraight = (isRoyal) => {
  const pool = randomize(5, 7);
  let straightArr = deck.splice(randomize(0, 3) * 12, 12);
  if (isRoyal) straightArr.splice(0, 13 - pool);
  let x;

  while (straightArr.length > pool) {
    x = randomize(straightArr[0].value, straightArr[straightArr.length - 1].value);
    straightArr = cutExess(straightArr, x, pool);
  }

  if (!isRoyal && straightArr[pool - 1].value === 14) {
    straightArr[pool - 1].value = randomize(2, 13);
  } // max length

  return straightArr;
};

// можно доделать до полного рандома- сейчас просто режет флешовый стрит размером в пул

module.exports = makeStraight;
