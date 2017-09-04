import axios from 'axios';

var helpers = {
  getLanding: function(){
    return axios.get('api/landing')
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default helpers;