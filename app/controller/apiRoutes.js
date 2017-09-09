const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);
const utils = require('./util.js');
const User = require('../model/User.js');

  // route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.json({"auth": false});
}

function routes(app, passport) {
  //Function to get the basic landing tiles
  var randomStart;
  app.get("/api/landing", function(req, res) {
    randomStart = Math.floor(Math.random()*5000);
    client.games({
      fields: ['name','cover', 'release_dates'], // Return all fields
      limit: 50, // Limit to 5 results
      offset: randomStart // Index offset for results
    }).then(response => {
      let cleanResponse = utils.replacePics('screenshot_med', response);
      utils.sendRes(res, utils.clearResponseOfEmpty('cover', cleanResponse));
      // res.send(cleanResponse);
    }).catch(error => {
      throw error;
    });
  });

	// process the login form
	// app.post('/login', passport.authenticate('local-login', {
	// 	successRedirect : '/profile', // redirect to the secure profile section
	// 	failureRedirect : '/failLogin', // redirect back to the signup page if there is an error
	// 	failureFlash : true // allow flash messages
	// }));

  app.post('/signin', passport.authenticate('local', { failureRedirect: '/?error=LoginError', failureFlash: true }), (req, res, next) => {
      req.session.save((err) => {
          if (err) {
              return next(err);
          }

          res.status(200).send('OK');
      });
  });
	// process the signup form
	// app.post('/signup', passport.authenticate('local-signup', {
	// 	successRedirect : '/profile', // redirect to the secure profile section
	// 	failureRedirect : '/failLogin', // redirect back to the signup page if there is an error
	// 	failureFlash : true // allow flash messages
	// }));

  app.post('/signup', (req, res, next) => {
		User.register(new User({ username : req.body.username }), req.body.password, (err, account) => {
				if (err) {
					console.log(err)
          return res.status(500).send({ error : err.message });
				}

				passport.authenticate('local')(req, res, () => {
						req.session.save((err) => {
								if (err) {
										return next(err);
								}

								res.status(200).send('OK');
						});
				});
		});
});

  // Logout from passport
  app.get('/logout', (req, res, next) => {
		req.logout();
		req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send('OK');
		});
  });

  app.get('/api/getGenre', function(req, res){
    var genreId = req.params.id;
    client.genres({
      fields:['name', 'id'],
      limit: 50,
    }).then(response => {
      console.log(response.body.length)
      res.send(response);
    }).catch(error => {
      throw error;
    });
  });

  app.get('/api/getPlatform', function(req, res){
    client.platforms({
      fields: ['id', 'name'], // Return all fields
      limit: 50,
      offset: 0 // Index offset for results
    }).then(response => {
      console.log(response.body.length)
      res.send(response);
    }).catch(error => {
      throw error;
    });
  });

  app.get('/profile', isLoggedIn, function(req,res) {
    User.findOne({
      email: req.body.email
    }).then(function(data){
      data.local.password = null;
      console.log('thelogindata', data.local)
      res.send(data);
    })
  });

  app.get('/checksess', function(req,res) {
    if(req.user) {
      return res.status(200).json({
        user: req.user,
        authenticated: true
      });
    } else {
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false
      });
    }
  });

  app.get('/faillogin', function(req,res) {
    res.json({ "auth": false });
  });
}

module.exports = routes;