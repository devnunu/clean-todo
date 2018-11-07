const jwt = require('jwt-simple');
const message = require('../common/message');

const authMiddleware = (req, res, next) => {
  // read the token from header or url
  const token = req.headers['x-access-token'] || req.query.token;

  // token does not exist
  if (!token) {
    return res.status(403).json({ msg: message.MSG_TOKEN_ERROR });
  }

  let decoded;
  try {
    decoded = jwt.decode(token, 'secret');
  } catch (e) {
    return res.status(403).json({ msg: message.MSG_NOT_LOGIN });
  }

  req.token = decoded;
  next();
};

module.exports = authMiddleware;
