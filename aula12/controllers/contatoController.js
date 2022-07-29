const Contato = require('../models/contato');

// Listar todos os contatos
exports.contatosList = async() => {
  try {
    const contatos = await Contato.findAll();
    return contatos;
  } catch(err) {
    console.log(err.message);
  }
};

// Detalhar um contato
exports.contatosRead = async(id) => {
  try {
    const contato = await Contato.findOne({
      where: {
        id: id
      }
    });
    return contato;
  } catch(err) {
    console.log(err.message);
  }
};

// Criar um contato
exports.contatosCreate = async(body) => {
  try {
    const contato = await Contato.create(body);
    return contato;
  } catch(err) {
    console.log(err.message);
  }
};

// Apagar um contato
exports.contatosDelete = async(id) => {
  try {
    const contato = await Contato.destroy({
      where: {
          id: id
      }
    });
    return contato;
  } catch(err) {
    console.log(err.message);
  }
};

// Atualizar um contato
exports.contatosUpdate = async(id, body) => {
  try {
    const contato = await Contato.update(body, {
      where: {
        id: id
      }
    });
    return contato[0];
  } catch(err) {
    console.log(err.message);
  }
};
