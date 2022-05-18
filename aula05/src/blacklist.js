const express = require('express');
const http = require('http');

const app = express();

const EVIL_IP = '123.45.67.8';

app.use((request, response, next) => {
    if (request.ip === EVIL_IP) {
        response.status(401).send('NAO PERMITIDO!');
    } else {
        next();
    }
});

app.get('/', (request, response) => {
    response.send('hello');
});

http.createServer(app).listen(3000);
