const dictionary = require('../dictionary and other/combDictionary');

const compare = (combValue) => {
  const currCombination = dictionary.find(dict => dict.value === combValue);
  return currCombination.combination;
};

module.exports = compare;
