const express = require('express');
const handlebars = require('express-handlebars');
const controller = require('./controllers/controllers');

const app = express();

app.engine('.hbs', handlebars.engine({
  defaultLayout: 'main',
  extname: '.hbs',
}));

app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const entries = [];

app.get('/', (req, res) => {
    res.render('home', { entries: entries });
});

app.get('/new-entry', (req, res) => {
    res.render('agenda-form');
});

app.get('/new-entry-fetch', (req, res) => {
    res.render('agenda-form-fetch');
});

app.post('/new-entry', (req, res) => {
    entries.push({
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    });

    res.redirect(303, '/');
});

app.listen(3000);

