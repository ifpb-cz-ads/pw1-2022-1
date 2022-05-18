const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "public");

app.get("/", (request, response) => {
    response.redirect("https://expressjs.com");
});

app.get("/hello", (request, response) => {
    response.redirect("/hello/eu");
});

app.get("/hello/:quem", (request, response) => {
    response.end("Ola, " + request.params.quem + "!");
});

app.get("/logo", (request, response) => {
    response.sendFile(publicPath + "/img/logo.png");
});

http.createServer(app).listen(3000);
