const convert = (arr) => {
  const goodArr = [...arr.hand, ...arr.table];
  return goodArr;
};
module.exports = convert;
