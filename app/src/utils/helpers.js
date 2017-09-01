import axios from 'axios';

var helpers = {
  getLanding: function(){
    axios.get('/api/landing')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = helpers;