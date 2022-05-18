const express = require("express");
const http = require("http");

const app = express();

app.get("/", (request, response) => {
    response.end("Boas-vindas a minha pagina!");
});

app.get("/about", (request, response) => {
    response.end("Este site e sobre testar Express.");
});

app.get("/previsao", (request, response) => {
    response.end("A previsao e de tempo firme.");
});

app.get("/hello/:quem", (request, response) => {
    response.end("Ola, " + request.params.quem + "!");
});

app.use((request, response) => {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404!");
});

http.createServer(app).listen(3000);
