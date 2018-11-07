const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// router
const user = require('./src/api/user');
const todo = require('./src/api/todo');

const ENV_DEV = 'dev';
const ENV_TEST = 'test';

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

// if (process.env.NODE_ENV === ENV_DEV) {
  app.use(morgan(ENV_DEV));
// }

// router
app.use('/users', user);
app.use('/todo', todo);

module.exports = app;
