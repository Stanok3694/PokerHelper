const randomize = require('../../utilities/randomInteger');
const cutExess = require('../../utilities/cutExess');
const deck = require('../../dictionary and other/cardDeck');


const makeStraight = (isRoyal) => {
  const pool = randomize(5, 7);
  const copyDeck = [...deck];
  let straightArr = copyDeck.splice(randomize(0, 3) * 13, 13);
  if (isRoyal) return straightArr.splice(13 - pool, pool);

  while (straightArr.length > pool) {
    const firstElement = straightArr[0].value;
    const lastElement = straightArr[straightArr.length - 1].value;
    const currentPosition = randomize(firstElement, lastElement);
    straightArr = cutExess(straightArr, currentPosition, pool);
    // console.log(straightArr);
  }

  return straightArr;
};

// можно доделать до полного рандома- сейчас просто режет флешовый стрит размером в пул

module.exports = makeStraight;
