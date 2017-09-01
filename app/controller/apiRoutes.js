const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);

function routes(app, passport) {
  app.get("/api/landing", isLoggedIn, function(req, res) {
    client.Game({
      fields: '*', // Return all fields
      limit: 20, // Limit to 5 results
      offset: 0 // Index offset for results
    }).then(response => {
      res.send(response);
      console.log(JSON.stringify(response));
    }).catch(error => {
      throw error;
    });
  });
}

module.exports = routes;