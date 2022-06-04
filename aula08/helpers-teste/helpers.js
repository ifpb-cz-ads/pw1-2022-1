const express = require('express')
const expressHandlebars = require('express-handlebars')

const port = process.env.PORT || 3000;

const app = express();

app.engine('.hbs', expressHandlebars.engine({
  extname: '.hbs'
}))

app.set('view engine', '.hbs')

const ifContext = {
  author: false,
  firstName: "Yehuda",
  lastName: "Katz",
};
app.get('/if-helper', (req, res) => {
    res.render('if-helper', ifContext);
});


const unlessContext = {};
app.get('/unless-helper', (req, res) => {
    res.render('unless-helper', unlessContext);
});

const eachContext = {
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
};
app.get('/each-helper', (req, res) => {
    res.render('each-helper', eachContext);
});

app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.' );
});
