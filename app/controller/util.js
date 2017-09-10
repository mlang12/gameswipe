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

  shortenStringToCharLen(stringToShorten, numChars, type) {
    if(stringToShorten === undefined) {
      return "No " + type + " Found..."
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
  }
}
module.exports = utils;