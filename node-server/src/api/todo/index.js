const express = require('express');
const router = express.Router();
const ctrl = require('./todo.ctrl');

router.get('/', ctrl.show);
// todo 생성
router.post('/', ctrl.create);
router.put('/', ctrl.update);
router.delete('/', ctrl.destroy);

module.exports = router;
