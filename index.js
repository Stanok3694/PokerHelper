const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const findBiggerComb = require('./findBiggerComb');

// SO: Code Review #1

// here u can do it just like:
// app.use(bodyParser.json());
// and it should work.
const jsonParsed = bodyParser.json();

// SO: Code Review #2

// u should try to name your routes in terms of business of your app,
// for PokerHelper it is - /getHigherCombination.
app.post('/rooooot', jsonParsed, (req, res) => {
    // SO: Code Review #3

    // for more clean and readable code u should not write like u did it below
    // u can move it into separate variable like higherCombination 
    // and then pass it into findBiggerComb(higherCombination)

    res.send(findBiggerComb(req.body));
});

app.use(bodyParser.json()); // <- SO: here it is; CR #1. 

// and it is working without passing anything into route handler.
// and it is in Express.js app architecture guides.

app.post('/getHigherCombination', (req, res) => { // <- SO: here it is; CR #2.
    const higherCombination = findBiggerComb(req.body); // <- SO: here it is; CR #3. 
    res.send(higherCombination);
});

app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));