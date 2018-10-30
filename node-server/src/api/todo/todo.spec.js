const should = require('should');
const request = require('supertest');
const app = require('../../../app');

// message
const message = require('../../common/message');

// model
const todoModels = require('./todo.model');

describe('POST /todo는', () => {
  const userId = 'loginTestUser';
  const password = 'test123';
  const users = [
    {
      userId,
      password
    }
  ];
  const todoTitle = 'clean my room';
  describe.only('성공시', () => {
    let body;
    const authenticatedUser = request.agent(app);
    before(() => commonModels.sequelize.sync({ force: true }));
    before(() => userModels.User.bulkCreate(users));
    it('상태코드 200을 리턴한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId, password })
        .then(() => {
          request(app)
            .post('/todo')
            .send({ todoTitle })
            .end((err, res) => {
              res.status.should.be.equal(200);
              body = res.body;
              done();
            });
        });
    });
    it('todo 객체를 반환한다', done => {
      res.status.should.be.properties(['userId, id, title']);
      done();
    });
  });
  describe('실패시', () => {
    const authenticatedUser = request.agent(app);
    it('userId가 없으면 상태코드 400과 메세지를 반환한다', done => {
      request(app)
        .post('/todo')
        .send({ todoTitle })
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.msg.should.be.equal('userId missing');
        });
    });
    it('title이 없으면 상태코드 400과 메세지를 반환한다', done => {
      authenticatedUser
        .post('/users/login')
        .send({ userId, password })
        .then(() => {
          request(app)
            .post('/todo')
            .end((err, res) => {
              res.status.should.be.equal(400);
              res.body.msg.should.be.equal('title missing');
            });
        });
    });
    // TODO: 오늘 Todo가 10개 이상일때 등록 불가능한 로직 추가 예정
  });
});

// describe('UPDATE /todo는', () => {
//   const userId = 'loginTestUser';
//   const password = 'test123';
//   const users = [
//     {
//       userId,
//       password
//     }
//   ];
//   const todoTitle = 'clean my room';
//   const id = 0;
//   describe('성공시', () => {
//     let body;
//     const authenticatedUser = request.agent(app);
//     before(() => commonModels.sequelize.sync({ force: true }));
//     before(() => userModels.User.bulkCreate(users));
//     it('상태코드 200을 리턴한다', done => {
//       request(app)
//         .update('/todo')
//         .send({ id });
//     });
//   });
//   describe('실패시', () => {});
// });

/*
* 할일 수정
* @method update
* @param userId(req.user), todoId, title
*/

// 성공시
// @return 200 ok, 수정된 할 일 객체 반환

// 실패시
// @case userId가 없을 때
// @case todoId 파라미터가 전달되지 않았을때
// @case 매칭되는 todoId가 없을 때
// @case title 파라미터가 전달되지 않았을떄

/*
* 할일 삭제
* @method delete
*/

// 성공시
// @return 200 ok, 삭제된 할 일 객체 반환

// 실패시
// @case userId가 없을 때
// @case todoId 파라미터가 전달되지 않았을때
// @case 매칭되는 todoId가 없을 때

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

/*
* user의 전체 할 일 조회
* @method get
* @param userId(req.user)
*/

// 성공시
// @return 200 ok, 해당 유저의 전체 할 일 반환

// 실패시
// @case userId가 없을 때
