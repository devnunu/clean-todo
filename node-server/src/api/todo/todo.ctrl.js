const { Todo } = require('../../common/models');
const message = require('../../common/message');

const show = (req, res) => {
  if (!req.user)
    return res.status(400).send({ msg: message.MSG_USERID_MISSING });
  const userId = req.user.id;


  Todo.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  }).then(todos => {
    res.status(200).send(todos);
  });
};

const create = (req, res) => {
  if (!req.user)
    return res.status(400).send({ msg: message.MSG_USERID_MISSING });
  const userId = req.user.id;

  const title = req.body.title;
  if (!title) return res.status(400).send({ msg: message.MSG_TITLE_MISSING });

  Todo.create({ userId, title }).then(todo => {
    res.status(200).json(todo);
  });
};

const update = (req, res) => {
  if (!req.user)
    return res.status(400).send({ msg: message.MSG_USERID_MISSING });
  const userId = req.user.id;

  const title = req.body.title;
  if (!title) return res.status(400).send({ msg: message.MSG_TITLE_MISSING });

  const id = req.body.id;
  if (typeof id !== 'number')
    return res.status(400).send({ msg: message.MSG_ID_MISSING });

  Todo.findOne({ where: { id } }).then(todo => {
    if (!todo) return res.status(404).end();

    todo.title = title;
    todo.save().then(todo => {
      res.status(200).json(todo);
    });
  });
};

const destroy = (req, res) => {
  if (!req.user)
    return res.status(400).send({ msg: message.MSG_USERID_MISSING });
  const userId = req.user.id;

  const id = req.body.id;
  if (typeof id !== 'number')
    return res.status(400).send({ msg: message.MSG_ID_MISSING });

  Todo.destroy({ where: { id } }).then(todoId => {
    res.status(204).end();
  });
};

module.exports = {
  show,
  create,
  update,
  destroy
};
