const express = require('express');
const router = express.Router();
const ctrl = require('./todo.ctrl');
const auth = require('../../middleware/auth');

router.use('/', auth);
router.get('/', ctrl.show); // 조회
router.post('/', ctrl.create);// 생성
router.put('/', ctrl.update); // 수정
router.delete('/', ctrl.destroy); // 삭제

module.exports = router;
