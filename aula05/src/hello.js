const express = require('express'); // importa o express
const http = require('http');

const app = express(); // chama a função para iniciar uma nova app

app.use((request, response) => {
    console.log('Requisição de entrada para ' + request.url);
    response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    response.end('Olá, PW1');
});

http.createServer(app).listen(3000);
