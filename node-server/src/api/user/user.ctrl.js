const { User } = require('../../common/models');
const message = require('../../common/message');

const show = (req, res) => {
  User.findAll().then(users => {
    res.json(users);
  });
};

const create = (req, res) => {
  const userId = req.body.userId;
  if (!userId)
    return res
      .status(400)
      .send({ msg: message.MSG_USERID_MISSING })
      .end();

  const password = req.body.password;
  if (!password)
    return res
      .status(400)
      .send({ msg: message.MSG_PASSWORD_MISSING })
      .end();

  const passwordValid = req.body.passwordValid;
  if (!passwordValid)
    return res
      .status(400)
      .send({ msg: message.MSG_PASSWORDVALID_MISSING })
      .end();

  const isSamePassword = password === passwordValid;
  if (!isSamePassword)
    return res
      .status(400)
      .send({ msg: message.MSG_PASSWORD_NOT_MATCHED })
      .end();

  User.create({ userId, password }).then(user => {
    res.status(201).json(user);
  });
};

const auth = (req, res) => {
  res.json(req.user).end();
};

const login = (req, res) => {
  res
    .status(200)
    .send({ msg: message.MSG_SUCCESS_LOGIN })
    .end();
};

const logout = (req, res) => {
  req.logout();
  res.send(200);
};

module.exports = {
  show,
  create,
  auth,
  login,
  logout,
};
