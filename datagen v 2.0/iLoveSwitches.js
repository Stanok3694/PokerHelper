const makePair = require('./makeSome/makePairs');
const makeFlush = require('./makeSome/makeFlush');
const makeNoComb = require('./makeSome/makeNoCombinations');
const makeStraight = require('./makeSome/makeStraight');
// const makeMagic = require('../utilities/makeMagic');

const distributor = (type) => {
  let currentArr = [];
  switch (type) {
    case 'pair':
    case 'three':
    case 'four':
    case 'two pairs':
    case 'fullhouse':
      currentArr = [...makePair(type)];
      break;
    case '':
      currentArr = [...makeNoComb()];
      break;
    case 'flush':
    case 'royalflush':
    case 'straightflush':
      currentArr = [...makeFlush(type)];
      break;
    case 'straight':
      currentArr = [...makeStraight(false)];
      break;
    case 'royalstraight':
      currentArr = [...makeStraight(true)];
      break;
    default:
      currentArr = ['mistake was made t_t'];
      break;
  }
  return currentArr;
};

module.exports = distributor;
