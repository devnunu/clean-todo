const Sequelize = require('sequelize');
const sequelize = require('../../common/models').sequelize;

const User = sequelize.define('user', {
  userId: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = {
  User
};
