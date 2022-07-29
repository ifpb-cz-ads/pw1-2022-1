const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://pauloewerton@localhost:5432/express');

const Contato = sequelize.define('contato', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false
  }
});

module.exports = Contato;
