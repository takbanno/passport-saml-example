module.exports = function (app, config, strategy, passport) {

  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('profile',
        {
          user: req.user
        });
    } else {
      res.render('home',
        {
          user: null
        });
    }
  });

  app.get('/login',
    passport.authenticate(config.passport.strategy,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );

  app.post(config.passport.saml.path,
    passport.authenticate(config.passport.strategy,
      {
        failureRedirect: '/',
        failureFlash: true
      }),
    function (req, res) {
      res.redirect('/');
    }
  );

  app.get('/logout', function (req, res) {
    strategy.logout(req, (err, req) => {
      if (err) {
        console.log(err);
      } else {
        req.logout(err => {
          if (err) {
            console.log(err);
          } else {
            res.redirect(req);
          }
        });
      }
    });
  });

};
