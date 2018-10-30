const todoModels = require('./todo.model');
const message = require('../../common/message');

const create = (req, res) => {
  const userId = req.user.userId;
  const title = req.body.title;
  todoModels.Todo.create({ userId, title }).then(todo => {
    res.status(200).json(todo);
  });
};

module.exports = {
  create
};
