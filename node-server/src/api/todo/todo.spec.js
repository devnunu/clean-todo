const should = require('should');
const request = require('supertest');
const app = require('../../../app');

// message
const message = require('../../common/message');

// model
const { sequelize, User, Todo } = require('../../common/models');

const testUser = {
  userId: 'loginTestUser',
  password: 'test123'
};

const testTodo = {
  id: 0,
  userId: 0,
  title: 'clean my room'
};

describe('GET /todo는', () => {
  const authenticatedUser = request.agent(app);
  describe('성공시', () => {
    let body, token;
    before(() => sequelize.sync({ force: true }));
    before(() => User.bulkCreate([testUser]));
    before(() => Todo.bulkCreate([testTodo]));
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('상태코드 200을 반환한다', done => {
      authenticatedUser
        .get('/todo')
        .set('x-access-token', token)
        .end((err, res) => {
          res.status.should.be.equal(200);
          body = res.body;
          done();
        });
    });
    it('todo 정보를 가져온다', done => {
      body.should.be.Array();
      done();
    });
  });
  describe('실패 시', () => {
    it('userId가 없으면 상태코드 403과 메세지를 반환한다', done => {
      request(app)
        .get('/todo')
        .send({ id: testTodo.id })
        .end((err, res) => {
          res.status.should.be.equal(403);
          res.body.msg.should.be.equal(message.MSG_TOKEN_ERROR);
          done();
        });
    });
  });
});

describe('POST /todo는', () => {
  const authenticatedUser = request.agent(app);
  describe.only('성공시', () => {
    let body, token;
    before(() => sequelize.sync({ force: true }));
    before(() => User.bulkCreate([testUser]));
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('todo 생성 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/todo')
        .set('x-access-token', token)
        .send({ title: testTodo.title })
        .end((err, res) => {
          res.status.should.be.equal(200);
          body = res.body;
          done();
        });
    });
    it('생성된 todo 객체를 반환한다', done => {
      body.should.be.properties(['id', 'userId', 'title']);
      done();
    });
  });
  describe('실패시', () => {
    let token;
    it('userId가 없으면 상태코드 403과 메세지를 반환한다', done => {
      request(app)
        .post('/todo')
        .send({ title: testTodo.title })
        .end((err, res) => {
          res.status.should.be.equal(403);
          res.body.msg.should.be.equal(message.MSG_TOKEN_ERROR);
          done();
        });
    });
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('title이 없으면 상태코드 400과 메세지를 반환한다', done => {
      authenticatedUser
        .post('/todo')
        .set('x-access-token', token)
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.msg.should.be.equal(message.MSG_TITLE_MISSING);
          done();
        });
    });
    // TODO: 오늘 Todo가 10개 이상일때 등록 불가능한 로직 추가 예정
  });
});

describe('UPDATE /todo는', () => {
  const authenticatedUser = request.agent(app);
  before(() => sequelize.sync({ force: true }));
  before(() => User.bulkCreate([testUser]));
  before(() => Todo.bulkCreate([testTodo]));
  describe('성공시', () => {
    let body, token;
    const updateTitle = 'clean your room';
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('변경 성공 시 상태코드 200을 리턴한다', done => {
      authenticatedUser
        .put('/todo')
        .set('x-access-token', token)
        .send({ id: testTodo.id, title: updateTitle })
        .end((err, res) => {
          res.status.should.be.equal(200);
          body = res.body;
          done();
        });
    });
    it('todo 객체를 리턴한다', done => {
      body.should.have.properties(['id', 'userId', 'title']);
      done();
    });
    it('id는 이전 입력된 값과 동일해야한다', done => {
      body.id.should.be.equal(0);
      done();
    });
    it('userId는 이전 입력된 값과 동일해야한다', done => {
      body.userId.should.be.equal(0);
      done();
    });
    it('title은 변경된 값과 동일해야한다', done => {
      body.title.should.be.equal(updateTitle);
      done();
    });
  });
  describe('실패시', () => {
    let token;
    it('userId가 없으면 상태코드 403과 메세지를 반환한다', done => {
      request(app)
        .put('/todo')
        .send({ title: testTodo.title, id: testTodo.id })
        .end((err, res) => {
          res.status.should.be.equal(403);
          res.body.msg.should.be.equal(message.MSG_TOKEN_ERROR);
          done();
        });
    });
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('title이 없으면 상태코드 400과 메세지를 반환한다', done => {
      authenticatedUser
        .put('/todo')
        .send({ id: testTodo.id })
        .set('x-access-token', token)
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.msg.should.be.equal(message.MSG_TITLE_MISSING);
          done();
        });
    });
  });
});

describe('DELETE /todo는', () => {
  const authenticatedUser = request.agent(app);
  describe('성공 시', () => {
    let body, token;
    before(() => sequelize.sync({ force: true }));
    before(() => User.bulkCreate([testUser]));
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('todo 삭제 시 204를 반환한다', done => {
      authenticatedUser
        .delete('/todo')
        .set('x-access-token', token)
        .send({
          id: testTodo.id
        })
        .end((err, res) => {
          body = res.body;
          res.status.should.be.equal(204);
          done();
        });
    });
  });
  describe('실패 시', () => {
    let token;
    it('userId가 없으면 상태코드 400과 메세지를 반환한다', done => {
      request(app)
        .delete('/todo')
        .send({ id: testTodo.id })
        .end((err, res) => {
          res.status.should.be.equal(403);
          res.body.msg.should.be.equal(message.MSG_TOKEN_ERROR);
          done();
        });
    });
    it('로그인 시 상태코드 200을 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId: testUser.userId, password: testUser.password })
        .end((err, res) => {
          token = res.body.token;
          res.status.should.be.equal(200);
          done();
        });
    });
    it('todo id가 전달되지 않았을때 400을 반환한다', done => {
      authenticatedUser
        .delete('/todo')
        .set('x-access-token', token)
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.msg.should.be.equal(message.MSG_ID_MISSING);
          done();
        });
    });
  });
});

/*
 * user의 특정 날짜의 할 일 조회
 * @method get
 * @param userId(req.user), date
 */

// 성공시
// @return 200 ok, 해당 유저의 오늘 할 일 리스트 반환

// 실패시
// @case userId가 없을 때
// @case date 파라미터가 전달되지 않았을때
