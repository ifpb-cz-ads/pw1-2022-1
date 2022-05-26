const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const controller = require('./controller');

const app = express();

// configura o handlebars como template engine
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// configura a engine definida com use
app.set('view engine', '.hbs');
app.set('views', path.resolve(__dirname, 'views'));

// configura o middleware de arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// configura a porta do servidor
const port = process.env.PORT || 3000;

app.get('/', controller.home);
app.get('/about', controller.about);

app.use(controller.notFound);
app.use(controller.erro);

app.listen(port, () => console.log(`app iniciou na porta ${port}`) );
