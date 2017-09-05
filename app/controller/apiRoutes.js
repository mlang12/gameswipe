const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);
const utils = require('./util.js');

  // route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/');
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
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

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
      user: req.email
    })
  });
}

module.exports = routes;