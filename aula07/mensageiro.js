const mensagens = [
  "Que a força esteja com você.",
  "Elementar meu caro, Watson.",
  "Harry, você deve estar se perguntando...",
  "Você não sabe nada, Jon Snow."
];

exports.gerarMensagem = () => {
  const idx = Math.floor(Math.random() * mensagens.length);
  return mensagens[idx];
};

