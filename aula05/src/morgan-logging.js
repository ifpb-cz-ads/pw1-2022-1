const express = require("express");
const logger = require("morgan");
const http = require("http");
const fs = require('fs');
const path = require('path');

const app = express();

//const fileStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

//app.use(logger("combined", {stream: fileStream}));

// simple logging with morgan
app.use(logger("dev"));

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Ola, PW2!");
});

http.createServer(app).listen(3000);
