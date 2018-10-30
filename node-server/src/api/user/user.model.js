const Sequelize = require('sequelize');
const sequelize = require('../../common/models').sequelize;

const User = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'user',
    freezeTableName: true
  }
);

module.exports = {
  User
};
