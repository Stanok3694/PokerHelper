const express = require('express');
const app = express();

const findForAll = require('./findForAll');
const testData = require('./testData');

const randomfunc = (req, res, next) => {
    res.send(findForAll(testData.fourthCombination));
    next();    
}

app.use(randomfunc);

app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));