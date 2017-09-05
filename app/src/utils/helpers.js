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
        console.log('++++++++++++++', response)
        return response;
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  
  signUp: function(creds) {
    console.log(creds)
    return axios.post('/signup', creds)
      .then(function (response){
        console.log('++++++++++++++', response)
        return response;
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export default helpers;