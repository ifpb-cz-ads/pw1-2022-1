const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Você não queria um arquivo estático");
});

http.createServer(app).listen(3000);
