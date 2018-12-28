const cutExess = (mass, pointer, pool) => {
  let newMass;
  const newArr = mass.map(card => card.value);
  const y = newArr.indexOf(pointer);


  if (y < pool - 1) {
    newMass = mass.splice(0, pool + y);
  } else {
    newMass = mass.splice(y - pool + 1, 13);
  }


  return newMass;
};

module.exports = cutExess;
