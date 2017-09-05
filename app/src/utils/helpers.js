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
  },

  signIn: function(creds) {
    return axios.post('/login', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
  
  signUp: function(creds) {
    console.log(creds)
    return axios.post('/signup', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  }
}

export default helpers;