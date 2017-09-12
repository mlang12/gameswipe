const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);
const utils = require('./util.js');
const User = require('../model/User.js');
const plats = require('../config/platforms.json').platforms

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
    randomStart = Math.floor(Math.random()*9900);
    client.games({
      filters: {
        "summary.exists": true
      },
      categories: [0, 2, 4],
      limit: 50, // Limit to 5 results
      offset: randomStart // Index offset for results
    }, ['id','name','cover', 'genres', 'summary', 'total_rating', 'release_dates']).then(response => {
      console.log(response)
      let cleanResponse = utils.replacePics('screenshot_med', response); // Replace picture sizes
      cleanResponse = utils.populateGenres(cleanResponse); // Get Genre names for each game
      cleanResponse = utils.populatePlatforms(cleanResponse); // Get platform info for each game
      cleanResponse = utils.addMiniView(cleanResponse); // Adds a mini category to the results for display on gametile
      utils.sendRes(res, utils.clearResponseOfEmpty('cover', cleanResponse)); // Only display games with a cover
    }).catch(error => {
      throw error;
    });
  });

  app.get('/count', (req, res) => {
    client.games()
  })

  app.post('/signin', passport.authenticate('local', { failureRedirect: '/?error=LoginError', failureFlash: true }), (req, res, next) => {
      req.session.save((err) => {
          if (err) {
            return next(err);
          }
          const un = req.body.username;
          User.find({
            username: un
          }).then(data => {
            res.status(200).send(data);
          })
      });
  });

  app.post('/signup', (req, res, next) => {
		User.register(new User({ username : req.body.username }), req.body.password, (err, account) => {
				if (err) {
          return res.status(500).send({ error : err.message });
				}

				passport.authenticate('local')(req, res, () => {
						req.session.save((err) => {
              if (err) {
                return next(err);
              }
              
              const un = req.body.username;
              User.find({
                username: un
              }).then(data => {
                res.status(200).send(data);
              }).catch(err => {
                console.log(err);
              })
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

  app.get('/getuserinfo', function(req,res) {
    const usr = req.user;
    if (usr !== undefined) {
      User.find({
        username: usr.username
      }).then(data => {
        res.status(200).send(data);
      }).catch(data => {
        res.status(500).send(data);
      });
    } else {
      res.status(401).json({'auth': false});
    }
  });

  app.get('/gameview/:id', function (req,res){
    const gameId = req.params.id;
    client.games({
      fields: "*",
      ids: [gameId]
    }).then(response => {
      let cleanResponse = utils.replacePics('screenshot_big', response); // Replace picture sizes
      cleanResponse = utils.populateGenres(cleanResponse); // Get Genre names for each game
      utils.sendRes(res, utils.populatePlatforms(cleanResponse));
    }).catch(error => {
      throw error;
    });
  });

  // Gets the initial data load when user lands on swipe
  app.get('/swipe', function(req,res) {
    if(req.user) {
      const usr = req.user;
      console.log(usr)
      const seenGames = usr.like.concat(usr.dontlike);
      const plats = usr.profile.systems;
      const genres = usr.profile.genres;

      // Get all games by platform
      client.platforms({
        "ids": plats,
        fields: "*",
        limit: 50
      }).then(function(gamesByPlatform){
        // Get all games by genre
        client.genres({
          fields: "*",
          limit: 50
        }).then(function(genreData){
          // Send all games, and user profile info to helper and 
          // Callback to send response to user
          utils.userSwipes(seenGames, plats, genres, gamesByPlatform.body, genreData.body, res, utils.sendRes);
        });
      });
    } else {
      // send false status if user not signed in
      res.status(401).json({'auth': false })
    }
  });

  // Gets the game details for swipe screen given an array of games
  app.post('/swipeupdate', function(req, res) {
    console.log(req)
    client.games({
      filters: {
        "summary.exists": true
      },
      ids: req.body.ids,
      limit: 50
    }, ['id','name','cover', 'genres', 'summary', 'total_rating', 'release_dates']).then(response => {
      console.log('THE RESPONSE:', response)
      let cleanResponse = utils.replacePics('screenshot_med', response); // Replace picture sizes
      cleanResponse = utils.populateGenres(cleanResponse); // Get Genre names for each game
      cleanResponse = utils.populatePlatforms(cleanResponse); // Get platform info for each game
      cleanResponse = utils.addMiniView(cleanResponse); // Adds a mini category to the results for display on gametile
      utils.sendRes(res, utils.clearResponseOfEmpty('cover', cleanResponse)); // Only display games with a cover
    }).catch(error => {
      throw error;
    });
  });

  // Gets all platforms which contain every game id in that platform
  app.get('/platgames', function(req,res) {
    if(req.user) {
      client.platforms({
        "ids": plats,
        fields: "*",
        limit: 50
      }).then(function(data){
        res.send(data);
      });
    } else {
      // send false status if user not signed in
      res.status(401).json({'auth': false })
    }
  });
  
  // Gets all genres which contain every game id in that genre
  app.get('/genregames', function(req,res) {
    if(req.user) {
      client.genres({
        fields: "*",
        limit: 50
      }).then(function(data){
        res.send(data);
      });
    } else {
      // send false status if user not signed in
      res.status(401).json({'auth': false })
    }
  });

  // Add to the user's liked games list
  app.post('/api/addToLike', function(req, res) {
    if(req.user) {
      User.findOneandUpdate({
        username: req.user.username
      }, {
        like: req.body.like
      }).then(function(data){
        console.log('Adding to likes: ', data);
        res.send(data);
      });
    } else {
      // send false status if user not signed in
      res.status(401).json({'auth': false })
    }
  });

  // Add to the user's disliked games list
  app.post('/api/addTodisLike', function(req, res) {
    if(req.user) {
      User.findOneandUpdate({
        username: req.user.username
      }, {
        dislike: req.body.like
      }).then(function(data){
        console.log('Adding to dislikes: ', data);
        res.send(data);
      });
    } else {
      // send false status if user not signed in
      res.status(401).json({'auth': false })
    }
  });
}

module.exports = routes;