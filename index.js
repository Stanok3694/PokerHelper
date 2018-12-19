const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('health_check');
});

app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));