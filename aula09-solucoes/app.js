const express = require("express");
const handlebars = require("express-handlebars");

const router = require("./routers/routers");

const app = express();

app.engine(
  ".hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let entries = [];

app.use((req, res, next) => {
  res.locals.entries = entries;
  next();
});

app.use(router);

app.listen(3000);
