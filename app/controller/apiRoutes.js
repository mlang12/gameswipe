const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);

function routes(app, passport) {
  //Function to get the basic landing tiles
  app.get("/api/landing", function(req, res) {
    client.games({
      fields: '*', // Return all fields
      limit: 50, // Limit to 5 results
      offset: 0 // Index offset for results
    }).then(response => {
      res.send(response);
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
}

module.exports = routes;