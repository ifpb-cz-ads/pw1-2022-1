const mensageiro = require('./mensageiro');

exports.home = (request, response) => {
    response.render('home');
};

exports.about = (request, response) => {
    response.render('about', { mensagem: mensageiro.gerarMensagem() });
};

exports.notFound = (request, response) => {
    response.render('404');
};

/* eslint-disable no-unused-vars */
exports.erro = (err, request, response, next) => {
    response.render('500');
};
/* eslint-disable no-unused-vars */
