const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const findBiggerComb = require('./lookingForCombs/findBiggerComb');
const indexAbc = require('./datagen/indexAbc');

app.use(bodyParser.json());

app.post('/getHigherCombination', (req, res) => {
  const mass = indexAbc();
  const higherCombination = findBiggerComb(mass);
  res.send(higherCombination);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));
