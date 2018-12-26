const randomLetter = () => {
  let rand = Math.random() * 4;
  rand = Math.floor(rand);
  switch (rand) {
    case 0:
      rand = 'a';
      break;
    case 1:
      rand = 'b';
      break;
    case 2:
      rand = 'c';
      break;
    case 3:
      rand = 'd';
      break;
    default:
      break;
  }
  return rand;
};
module.exports = randomLetter;
