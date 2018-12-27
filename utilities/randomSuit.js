const randomLetter = () => {
  let rand = Math.random() * 4;
  rand = Math.floor(rand);
  switch (rand) {
    case 0:
      rand = 'diamonds';
      break;
    case 1:
      rand = 'clubs';
      break;
    case 2:
      rand = 'hearts';
      break;
    case 3:
      rand = 'spades';
      break;
    default:
      break;
  }
  return rand;
};
module.exports = randomLetter;
