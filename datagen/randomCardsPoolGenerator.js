const randomInt = require('./generators/randomInteger');
const cardFiller = require('./cardFiller');


const generateRandCardsPool = () => {
  const cardPool = {
    hand: [...cardFiller(2)],
    table: [...cardFiller(randomInt(3, 5))],
  };
  return cardPool;
};
module.exports = generateRandCardsPool;
