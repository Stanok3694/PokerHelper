const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const findPairsCombs = require('./findPairsCombs');
const findFlushComb = require('./findFlushComb')

const jsonParsed = bodyParser.json();

app.post('/rooooot', jsonParsed, (req, res) => {
    res.send(findFlushComb(req.body));
});

app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));