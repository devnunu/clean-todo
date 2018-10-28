const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const user = require('./src/api/user');
const todo = require('./src/api/todo');

const ENV_DEV = 'dev';

// middle ware
if (precess.env.NODE_ENV === ENV_DEV) {
  app.use(morgan(ENV_DEV));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

// router
app.use('/user', user);
app.use('/todo', todo);

module.exports = app;
