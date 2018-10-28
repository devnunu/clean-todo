const should = require('should');
const request = require('supertest');
const app = require('../../../app');

describe('POST /user는 ', () => {
  let name = 'testUser',
    password = 'test123',
    passwordValid = 'test123',
    body;
  describe('성공시 ', () => {
    before(() => models.sequelize.sync({ force: true }));
    it('201을 리턴한다', done => {
      request(app)
        .post('/user')
        .send({ name, password, passwordValid })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });
    it('유저 객체를 반환한다', () => {
      body.should.have.property('id');
    });
  });
  describe('실패시 ', () => {
    it('name 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ password, passwordValid })
        .expect(400)
        .end(done);
    });
    it('password 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ name, passwordValid })
        .expect(400)
        .end(done);
    });
    it('passwordValid 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ name, password })
        .expect(400)
        .end(done);
    });
    it('password가 다를경우 400 반환한다', done => {
      (password = 'test123'),
        (passwordValid = 'test456'),
        request(app)
          .post('/user')
          .send({ name, password, passwordValid })
          .expect(400)
          .end(done);
    });
  });
});

/* 유저 생성
* @method POST
* @param (name, password, validPassword)
*/

/* 성공시
* @return user 객체
* @status 201 ok
*/

/* 실패시
* @case name 값이 없을 때
* @status 400
*/

/* 실패시
* @case password 값이 없을 때
* @status 400
*/

/* 실패시
* @case validPassword 값이 없을 때
* @status 400
*/

/* 실패시
* @case password 값이 다를 때
* @status 400
*/

////////////////////

/* 로그인 
* @method get
* @param (name, password)
*/

/* 성공시
* @return user 객체
* @status 200 ok
*/

/* 실패시
* @case 유저 name이 없을때
* @return message: Incorrect username
* @status 400 ok
*/

/* 실패시
* @case 유저 password가 맞지 않을떄
* @return message: Incorrect password
* @status 400 ok
*/
