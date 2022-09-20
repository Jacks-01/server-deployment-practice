'use strict'

const express = require('express');

const app = express();
const notFound = require('./error-handling/404');
const errorHandler = require('./error-handling/500');
const PORT = process.env.PORT || 3001


app.get('/', (req, res, next) => {
    res.status(200).send('Hello There')
});

app.get('/bad', (req, res, next) => {
    next('this is a bad route');
});

app.use('*', notFound);


app.use(errorHandler)

app.listen(PORT, () => {
    console.log('app is listening on port 3001')
}); 
