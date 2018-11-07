const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// model
const { User } = require('../common/models');

module.exports = app => {
  app.use(passport.initialize());
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'secret'
      },
      (jwt_payload, done) => {
        console.log('jwt_payload', jwt_payload);
        User.findOne({ where: { id: jwt_payload.id } }).then(user => {
          if (!user) {
            return done(null, false, { msg: 'Incorrect username' });
          }
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    )
  );
};
