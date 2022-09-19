'use strict'

const express = require('express');

const app = express();

app.use('*', (req, res, next) => {
    res.send('Hello There');

});

app.listen(3001, () => {
    console.log('app is listening on port 3001')
}); 
