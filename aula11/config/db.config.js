const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const url = process.env.DATABASE_URL;
let sequelize = null;

if (url.includes('localhost')) {
  sequelize = new Sequelize(url);
} else {
  sequelize = new Sequelize(`${url}?sslmode=no-verify`, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contato = require('../models/contato')(sequelize, Sequelize);
db.user = require('../models/user')(sequelize, Sequelize);

db.sync = async() => {
  await sequelize.sync();
};

module.exports = db;
