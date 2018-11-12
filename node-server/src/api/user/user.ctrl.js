const jwt = require('jwt-simple');

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
  const userId = req.token.id;
  User.findOne({ where: { userId } }).then(user => {
    if (!user)
      return res
        .status(404)
        .send({ mag: message.MSG_USERID_MISSING })
        .end();
    res.send({ userId }).end();
  });
};

const login = (req, res) => {
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

  User.findOne({ where: { userId } }).then(user => {
    if (!user) {
      return res.status(401).send({ msg: 'Incorrect username' });
    }
    const validPassword = user.password === password;
    if (!validPassword) return res.status(401).send({ msg: 'Incorrect password' });

    const token = getToken(user.userId);
    return res
      .status(200)
      .send({ token, msg: message.MSG_SUCCESS_LOGIN })
      .end();
  });
};

const logout = (req, res) => {
  req.logout();
  res.send(200);
};

const getToken = userId => {
  const payload = { id: userId };
  return jwt.encode(payload, 'secret');
};

module.exports = {
  show,
  create,
  auth,
  login,
  logout
};
