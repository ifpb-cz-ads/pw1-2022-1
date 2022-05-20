const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('hello', {
        message: 'Olá! Esse é meu app.'
    });
});

http.createServer(app).listen(3000);
