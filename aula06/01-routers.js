// importação do express
const express = require('express');
//
// configuração da porta do servidor
const port = process.env.PORT || 3000;

const app = express();
// roteador get para '/' com retorno texto puro
app.get('/', (request, response) => {
    response.type('text/plain');
    response.status(200);
    response.send('Home page');
});
//
// roteador get para '/about' com retorno texto puro
app.get('/about', (request, response) => {
    response.type('text/plain');
    response.status(200);
    response.send('About page');
});

// middleware de páginas de erro
// pagina 404 customizada (saída texto)
app.use((request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(404);
    response.send('Não encontrado!');
});

//
// pagina 500 customizada (saída texto)
app.use((request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(500);
    response.send('Erro do servidor');
});

app.listen(port, () => console.log(`app iniciou na porta ${port}`) );
