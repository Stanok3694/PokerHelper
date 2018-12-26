const randomize = require('../datagen/generators/randomInteger');


const doSome = (type, pool) => {
  // just want make some crazy shit
  const numeric = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const mass = [];

  for (let i = 0; i < pool; i += 1) {
    mass.push(numeric.splice(randomize(0, numeric.length - 1), 1));
  }
  const y = mass.length - 1;
  if (type === 'pair') {
    mass.splice(0, 1, mass[y]);
  } else if (type === 'three') {
    mass.splice(0, 2, mass[y], mass[y]);
  } else if (type === 'four') {
    mass.splice(0, 3, mass[y], mass[y], mass[y]);
  } else if (type === 'fullhouse') {
    mass.splice(0, 1, mass[y]);
    mass.splice(1, 2, mass[y - 1], mass[y - 1]);
  }

  return mass;
};

module.exports = doSome;
