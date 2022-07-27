const db = require("../config/db.config");
const Contato = db.contato;

// Listar todos os contatos
exports.contatosList = async (req, res) => {
  try {
    const contatos = await Contato.findAll();
    res.json({ contatos: contatos });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Detalhar um contato
exports.contatosRead = async (req, res) => {
  try {
    const contato = await Contato.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!contato) {
      return res.send(404);
    }
    res.json({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Criar um contato
exports.contatosCreate = async (req, res) => {
  try {
    const contato = await Contato.create(req.body);
    res.status(201).json({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Atualizar um contato
exports.contatosUpdate = async (req, res) => {
  try {
    const contato = await Contato.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send();
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Apagar um contato
exports.contatosDelete = async (req, res) => {
  try {
    const contato = await Contato.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send();
  } catch (err) {
    res.send({ message: err.message });
  }
};
