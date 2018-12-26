const randomInt = require('./generators/randomInteger');
const randomLett = require('./generators/randomLetter');

const fillWithCards = (cardsAmount) => {
  const cards = [];
  for (let i = 0; i < cardsAmount; i += 1) {
    cards.push({ weight: randomInt(2, 14), suit: randomLett() });
  }
  return cards;
};

module.exports = fillWithCards;
