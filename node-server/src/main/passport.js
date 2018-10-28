const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// model
const userModels = require('../api/user/user.model');

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'password'
      },
      (userId, password, done) => {
        userModels.User.findOne({ where: { userId } }).then(user => {
          if (!user) {
            return done(null, false, { msg: 'Incorrect username' });
          }

          const validPassword = user.password === password;
          if (!validPassword)
            return done(null, false, { msg: 'Incorrect password' });

          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    userModels.User.findOne({ where: { id } }).then(user => {
      done(null, user);
    });
  });
};
