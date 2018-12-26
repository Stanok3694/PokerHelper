const cutExess = (mass, pointer, pool) => {
  let newMass;
  const y = mass.indexOf(pointer);

  if (y < pool - 1) {
    newMass = mass.splice(0, pool + y);
  } else {
    newMass = mass.splice(y - 6, 13);
  }

  return newMass;
};

module.exports = cutExess;
