const seeds = require('../config/seeds.json');

const utils = {
  replacePics: function(desiredPicSize, idbObj) {
    return JSON.parse(JSON.stringify(idbObj).replace(/t_thumb/g, 't_' + desiredPicSize));
  },

  clearResponseOfEmpty: function(missingField, idbObj) {
    // This function will look through an raw idb API Object and remove all
    // obj items where a specified parameter is missing. For example if 
    // looking for all results to contain a 'cover' field then it will
    // go through the object and remove the results that don't contain cover
    // and return a new instance of with the cleaned object
    var cleanedObj = idbObj;
    var tempArr = idbObj.body.filter(function (item) {
      return item[missingField] !== undefined;
    });
    cleanedObj.body = tempArr;
    return cleanedObj;
  },

  sendRes: function(res, obj) {
    res.send(obj);
  },

  getGenreById: function(idToCheck) {
    let theGenre = "Not Found";
    seeds.genre.forEach(item => {
      if (item.id === idToCheck) {
        theGenre = item.name;
      }
    })
    return theGenre;
  },

  getPlatformById: function(idToCheck) {
    let thePlatform = "Not Found";
    seeds.platforms.forEach(item => {
      if (item.id === idToCheck) {
        thePlatform = item.name;
      }
    })
    return thePlatform;
  },

  populateGenres: function(obj) {
    let getGen = this.getGenreById;
    let newGenres;
    let cleanedObj = obj;
    obj.body.forEach(function (item, i) {
      if (item.genres !== undefined) {
        newGenres = item.genres.map(genNum => {
          return getGen(genNum);
        })
        cleanedObj.body[i].genres = newGenres;
      } else {
        cleanedObj.body[i].genres = ["None Found"];
      }
    });
    return cleanedObj;
  },

  populatePlatforms: function(obj) {
    let getPlat = this.getPlatformById;
    let cleanedObj = obj;
    let plats;
    obj.body.forEach(function (item, i) {
      if (item.release_dates !== undefined) {
        if (item.release_dates[0].platform !== undefined) {
          plats = item.release_dates.map(relItem => {
            return getPlat(relItem.platform);
          })
          cleanedObj.body[i].platform = plats.join(", ");
        } else {
          cleanedObj.body[i].platform = "None Found";
        }
      } else {
        cleanedObj.body[i].platform = "None Found";
      }
    });
    return cleanedObj;
  },

  // This function will accept a string and shorten it to 
  // a specified number of characters. If type is specified
  // and the string is undefined it will return that none
  // of that type were found.
  shortenStringToCharLen(stringToShorten, numChars, type) {
    if(stringToShorten === undefined) {
      if (type) {
        return "No " + type + " Found..."
      } else {
        return "None Found..."
      }
    } else {
      return stringToShorten.slice(0, numChars) + "...";
    }    
  },

  addMiniView(obj) {
    let cleanedObj = obj;
    const shortString = this.shortenStringToCharLen;
    obj.body.forEach(function (item, i) {
      cleanedObj.body[i].mini = {
        summary: shortString(item.summary, 150, "Summary"),
        genres: shortString(item.genres.join(", "), 20, "Genres"),
        platform: shortString(item.platform, 20, "Platforms")
      };
    });
    return cleanedObj;
  },

  // Accepts 2 arrays and compares them and returns
  // an array filled with values that are present in both
  // arr1 and arr2. If no matches will return empty array
  // Example: 
  //  arr1 = [1,2,3]
  //  arr2 = [3,4,5]
  //  will return [3] 
  findCommmonGameIds(arr1, arr2) {
    let combinedArr = [];

    arr1.forEach(item => {
      if (arr2.indexOf(item) > -1) {
        combinedArr.push(item);
      }
    });
    return combinedArr;
  },

  getGamesInCategories(userPrefs, categoryData) {
    let filteredData = [];

    // If the user has no prefs then user everything
    if (!userPrefs || userPrefs.length === 0) {
      categoryData.forEach(item => {
        filteredData = filteredData.concat(item.games)
      });

    // Otherwise only take games from categories in user prefs
    } else {
      userPrefs.forEach(pref => { 
        categoryData.forEach(item => {
          if (item.id === pref) {
            filteredData = filteredData.concat(item.games);
          }
        });
      });
    }

    return filteredData;
  },

  userSwipes(seenGames, plats, genres, gamesByPlatform, genreData, res, cb) {
    const gamesInUserPlatformRange = this.getGamesInCategories(plats, gamesByPlatform);
    const gamesInUserGenreRange = this.getGamesInCategories(genres, genreData);
    const combinedGames = this.findCommmonGameIds(gamesInUserGenreRange, gamesInUserPlatformRange);
    const combinedGamesUnseen = combinedGames.filter(game => {
      return seenGames.indexOf(game) < 0;
    })
    cb(res, combinedGamesUnseen);
  }

}
module.exports = utils;