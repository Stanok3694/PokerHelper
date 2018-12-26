const randomize = require('../datagen/generators/randomInteger');
const cutExess = require('./cutExess');


const makeStraight = (isRoyal, pool) => {
  let mass = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  if (isRoyal) mass.splice(0, 13 - pool);
  let x;

  while (mass.length > pool) {
    x = randomize(mass[0], mass[mass.length - 1]);
    mass = cutExess(mass, x, pool);
  }

  if (!isRoyal && mass[pool - 1] === 14) mass[pool - 1] = randomize(2, 13);
  return mass;
};

module.exports = makeStraight;
