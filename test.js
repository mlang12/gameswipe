const igdb = require('igdb-api-node').default;

const client = igdb('484d66d7bc56b4414f10e859736310e9');

client.Genre({
    fields: '*', // Return all fields
    limit: 20, // Limit to 5 results
    offset: 0 // Index offset for results
}).then(response => {
  // games: [Array],
  //      tags: [Array],
  //      developers: [Array],
  //      publishers: [Array],
  //      player_perspectives: [Array],
  //      game_modes: [Array],
  //      themes: [Array],
  //      genres: [Array],
  //      release_dates: [Array],
  //      screenshots: [Array],
  //      websites: [Array] }
    // console.log("games: ",response.body[0].games)
    // console.log("tags: ",response.body[0].tags)
    // console.log("developers: ",response.body[0].developers)
    // console.log("publishers: ",response.body[0].publishers)
    // console.log("game_modes: ",response.body[0].game_modes)
    // console.log("player Perspectives: ",response.body[0].player_perspectives)
    // console.log("themes: ",response.body[0].themes)
    // console.log("generes: ",response.body[0].genres)
    // console.log("release_dates: ",response.body[0].release_dates)
    // console.log("screenshots: ",response.body[0].screenshots)
    // console.log("websites: ",response.body[0].websites)

    console.log(JSON.stringify(response));

}).catch(error => {
    throw error;
});