const randomInteger = (lowerBorder, upperBorder) => {
  let rand = lowerBorder + Math.random() * (upperBorder + 1 - lowerBorder);
  rand = Math.floor(rand);
  return rand;
};
module.exports = randomInteger;
