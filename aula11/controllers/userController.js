const db = require("../config/db.config");
const User = db.user;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Cadastrar usuário
exports.userCreate = async (req, res) => {
  let user = null;
  try {
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
  } catch (err) {
    res.json({ message: err.message });
  }

  if (user != null) {
    return res.status(400).json({ message: "E-mail já cadastrado." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = Object.assign({}, req.body);
  newUser.password = hashedPassword;

  try {
    user = await User.create(newUser);
    res.json({ usuario: user.id });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Fazer login
exports.userLogin = async (req, res) => {
  let user = null;
  try {
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
  } catch (err) {
    res.json({ message: err.message });
  }

  const message = "E-mail ou senha inválidos.";
  if (user === null) {
    return res.status(400).json({ message: message });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: message });
  }

  const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
  res.header("Auth-Token", token).json({ token: token });
};
