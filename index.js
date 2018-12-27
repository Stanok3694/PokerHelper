const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const findBiggerComb = require('./lookingForCombs/findBiggerComb');
const makeMagic = require('./utilities/makeMagic');
const makeNoCombinations = require('./datagen v 2.0/makeSome/makeNoCombinations');

app.use(bodyParser.json());

app.post('/getHigherCombination', (req, res) => {
  const higherCombination = findBiggerComb(makeMagic(makeNoCombinations()));
  res.send(higherCombination);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));
