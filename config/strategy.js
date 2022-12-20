const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (config) {
    return new SamlStrategy(
        config.passport.saml,
        function (profile, done) {
            console.log(profile);
            return done(null, profile);
        },
        function (profile, done) {
            // logout
            console.log(profile);
            return done(null, profile);
        });
}