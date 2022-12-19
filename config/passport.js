const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SamlStrategy(
    config.passport.saml,
    function (profile, done) {
      console.log(profile);
      return done(null, profile);
    },
    function (profile, done) {
      // logout
      console.log(profile);
      return done(null, profile);
    })
  );

};
