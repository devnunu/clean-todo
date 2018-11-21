const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
});

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
    },
  },
  {
    tableName: 'user',
    freezeTableName: true
  }
);

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
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    tableName: 'todo',
    freezeTableName: true
  }
);

// CAUTION: foreignKey는 underscore를 사용하자. 그렇지 않으면 에러 발생
Todo.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = {
  sequelize,
  User,
  Todo
};
