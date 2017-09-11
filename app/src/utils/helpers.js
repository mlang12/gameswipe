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
    return axios.post('/signin', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
  
  signUp: function(creds) {
    return axios.post('/signup', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },

  // Route to log user out of passport
  logout: function(creds) {
    return axios.get('/logout', {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return true;
      }
    }).catch(function(err) {
      return err;
    })
  },
  
  // Route to get all the details of 1 game from the idb api
  getGameDetails: function(rte){
    return axios.get(rte, {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return false;
      }
    }).catch(function(err) {
      return err;
    })
  },

  getUserInfo: function(){
    return axios.get('/getuserinfo', {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return false;
      }
    }).catch(function(err) {
      return err;
    })
  },

  checkAuth: function() {
    return axios.get('/checksess', {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return false;
      }
    }).catch(function(err) {
      return err;
    })
  }
}

export default helpers;