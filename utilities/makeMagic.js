const makeMagic = (arr) => {
  const cardPool = {
    hand: [...arr.splice(0, 2)],
    table: [...arr.splice(0, 5)],
  };
  return cardPool;
};

module.exports = makeMagic;
