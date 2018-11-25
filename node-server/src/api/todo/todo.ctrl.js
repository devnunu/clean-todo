const moment = require('moment');

const { Todo } = require('../../common/models');
const message = require('../../common/message');
const dateUtil = require('../../common/dateUtil');

const showToday = (req, res) => {
  const userId = req.token.id;

  Todo.findAll({
    where: {
      userId,
      createdAt: {
        gt: dateUtil.getTodayStartDate(),
        lt: dateUtil.getTodayEndDate()
      }
    },
    order: [['createdAt', 'DESC']]
  }).then(todoList => {
    res.status(200).send({ todoList });
  });
};

const create = (req, res) => {
  const userId = req.token.id;

  const title = req.body.title;

  if (!title) return res.status(400).send({ msg: message.MSG_TITLE_MISSING });

  Todo.create({ userId, title }).then(todo => {
    res.status(200).send({ todo });
  });
};

const update = (req, res) => {
  const userId = req.token.id;

  const id = req.body.id;
  if (typeof id !== 'number')
    return res.status(400).send({ msg: message.MSG_ID_MISSING });

  Todo.findOne({ where: { id } }).then(todo => {
    if (!todo) return res.status(404).end();

    todo.completed = !todo.completed;
    todo.save().then(todo => {
      res.status(200).send({ todo });
    });
  });
};

const destroy = (req, res) => {
  const userId = req.token.id;

  const id = req.body.id;
  if (typeof id !== 'number')
    return res.status(400).send({ msg: message.MSG_ID_MISSING });

  Todo.destroy({ where: { id } }).then(todoId => {
    res.status(204).end();
  });
};

module.exports = {
  showToday,
  create,
  update,
  destroy
};
