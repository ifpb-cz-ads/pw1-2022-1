const express = require("express");
const http = require("http");
const app = express();

app.use((request, response, next) => {
    console.log("Requisicao " + request.method + " para " + request.url);
    next();
});

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Ola, PW2!");
});

http.createServer(app).listen(3000);
