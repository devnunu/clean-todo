const should = require('should');
const request = require('supertest');
const app = require('../../../app');

describe('POST /users는 ', () => {
  let id = 'testUser',
    password = 'test123',
    passwordValid = 'test123',
    body;
  describe('성공시 ', () => {
    before(() => models.sequelize.sync({ force: true }));
    it('201을 리턴한다', done => {
      request(app)
        .post('/user')
        .send({ id, password, passwordValid })
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
    it('id 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ password, passwordValid })
        .expect(400)
        .end(done);
    });
    it('password 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ id, passwordValid })
        .expect(400)
        .end(done);
    });
    it('passwordValid 파라미터가 없을경우 400 반환한다', done => {
      request(app)
        .post('/user')
        .send({ id, password })
        .expect(400)
        .end(done);
    });
    it('password가 다를경우 400 반환한다', done => {
      (password = 'test123'),
        (passwordValid = 'test456'),
        request(app)
          .post('/user')
          .send({ id, password, passwordValid })
          .expect(400)
          .end(done);
    });
  });
});

describe('POST /users/login은', () => {
  const id = 'loginTestUser';
  const password= 'test123';
  const users = [
    {
      id,
      password:
        '61b976821ad4a7545054a2e45367e3af53522477d39b28fdca26b36fed95f8b1a2005e3188b682a74f9e772aa3cb7201fcb6d01ce6cb2cdf720690fd26d5bb1e'
    }
  ];
  
  describe('성공시', () => {
  const body;
  before(() => models.sequelize.sync({ force: true }));
  before(() => models.User.bulkCreate(users));
    it('200 ok를 반환한다', done => {
      request(app)
        .send({ id, password })
        .expect(200)
        .end((err,res)=>{
          body = res.body;
          done();
        });
    });
    // TODO: 성공시 반환형 찾아서 테스트 케이스 생성해야함
  });

  describe('실패시', () => {
    const body;
    const wrongUserId = 'wrong123'
    const wrongUserPassword = 'wrong123'
    before(() => models.sequelize.sync({ force: true }));
    before(() => models.User.bulkCreate(users));
    it('id 값이 같은 유저가 없으면 400 반환한다', done => {
        request(app)
          .send({ id:wrongUserId, password })
          .expect(400)
          .end((done)=>{
            body = res.body;
            done()
          });
      });
    });
    it('id 값이 같은 유저가 없으면 경고 메세지를 반환한다', done => {
      body.should.have.property('message');
      body.message.should.be.equal('Incorrect username');
    });
    it('패스워드가 틀리면 400 반환한다', done => {
      request(app)
        .send({ id, password:wrongUserPassword })
        .expect(400)
        .end((done)=>{
          body = res.body;
          done()
        });
  });
  it('password가 틀리면 경고 메세지를 반환한다', done => {
    body.should.have.property('message');
    body.message.should.be.equal('Incorrect password');
  });
});