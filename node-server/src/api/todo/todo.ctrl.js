const { Todo } = require('../../common/models');
const message = require('../../common/message');

const create = (req, res) => {
  const userId = req.user.id;
  const title = req.body.title;
  Todo.create({ userId, title }).then(todo => {
    res.status(200).json(todo);
  });
};

module.exports = {
  create,
};
