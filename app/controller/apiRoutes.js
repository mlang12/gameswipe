const igdb = require('igdb-api-node').default;
const key = require('../keys').key;
const client = igdb(key);

function routes(app, passport) {
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
}

module.exports = routes;