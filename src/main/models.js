const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
});

const models = {

}

module.exports = {
  Sequelize,
  sequelize,
  models
};
