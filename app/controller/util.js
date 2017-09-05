var utils = {
  replacePics: function(desiredPicSize, idbObj) {
    return JSON.parse(JSON.stringify(idbObj).replace(/t_thumb/g, 't_' + desiredPicSize));
  }
}
module.exports = utils;