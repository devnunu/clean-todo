const express = require('express');
const router = express.Router();
const ctrl = require('./todo.ctrl');

// todo 생성
router.post('/', ctrl.create);

module.exports = router;
