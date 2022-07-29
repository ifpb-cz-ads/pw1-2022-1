// importações
const express = require('express');
//
// configuração da porta do servidor
const port = process.env.PORT || 3000;

const app = express();
//
// pagina 404 customizada (saída texto)
app.use((err, request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(404);
    response.send('Não encontrado!');
});

//
// pagina 500 customizada (saída texto)
app.use((err, request, response, next) => {
    response.set('Content-type', 'text/plain; charset=utf-8');
    response.status(500);
    response.send('Erro do servidor');
});

app.listen(port, () => console.log(`app iniciou na porta ${port}`));
