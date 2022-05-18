const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

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
    response.writeHead(400, { "Content-Type": "text/plain" });
    response.end("404!");
});

http.createServer(app).listen(3000);
