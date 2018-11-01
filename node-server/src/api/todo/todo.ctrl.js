const { Todo } = require('../../common/models');
const message = require('../../common/message');

const create = (req, res) => {
  if (!req.user) return res.status(400).send({ msg: message.MSG_USERID_MISSING });
  const userId = req.user.id;

  const title = req.body.title;
  if (!title) return res.status(400).send({ msg: message.MSG_TITLE_MISSING });

  Todo.create({ userId, title }).then(todo => {
    res.status(200).json(todo);
  });
};

module.exports = {
  create,
};
