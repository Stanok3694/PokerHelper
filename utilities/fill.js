const randomize = require('./randomInteger');

const fill = (array, pool) => {
  const deckArray = [];
  for (let i = 0; i < pool; i += 1) {
    deckArray.push(array.splice(randomize(0, deckArray.length - 1), 1));
  }
};

module.exports = fill;
