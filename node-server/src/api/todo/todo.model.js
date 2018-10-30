const Sequelize = require('sequelize');
const sequelize = require('../../common/models').sequelize;

// model
const userModels = require('../user/user.model');

const Todo = sequelize.define(
  'todo',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'todo',
    freezeTableName: true
  }
);

Todo.belongsTo(userModels.User, { foreignKey: 'userId', targetKey: 'id' });

module.exports = {
  Todo
};
