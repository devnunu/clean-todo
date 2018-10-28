const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

const passport = require('passport');

// 전체 유저 출력
router.get('/', ctrl.show);
// 유저 생성
router.post('/', ctrl.create);
// 유저 세션 리턴
router.get('/auth', ctrl.auth);
// 로그인
router.post('/login', passport.authenticate('local'), ctrl.login);
// 로그아웃
router.delete('/logout', ctrl.logout);

module.exports = router;
