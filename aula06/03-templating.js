const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

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
// reimplementa os roteadores para renderizar
// templates home e about
app.get('/', (request, response) => {
    response.render('home');
});
// cria um array com as frases do dia

const mensagens = [
    'Boa tarde',
    'Uma mensagem simples',
    'PW1 2022.1',
    'Express e Node App'
];

// código para o roteador de /about passando a frase do dia
// no template; utilizar Math.floor(Math.random()*array.length)
app.get('/about', (request, response) => {
    const index = Math.floor(Math.random() * mensagens.length);
    response.render('about', { mensagem: mensagens[index] });
});

app.use((request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(404);
    response.send('Não encontrado!');
});

// pagina 500 customizada (saída texto)
app.use((err, request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(500);
    response.send('Erro do servidor');
});

app.listen(port, () => console.log(`app iniciou na porta ${port}`) );
