var utils = {
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
  }
}
module.exports = utils;