import axios from 'axios';

var helpers = {
  // Requests the backend for data to populate the landing page
  getLanding: function(){
    return axios.get('api/landing')
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // Sends post request to log in an existing user
  signIn: function(creds) {
    return axios.post('/signin', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
        return error;
      })
  },
  
  // Sends post request to sign up the user
  signUp: function(creds) {
    return axios.post('/signup', creds)
      .then(function (response){
        return response;
      })
      .catch(function (error) {
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

  // Queries the user model for the user's details
  // If signed in will return user's profile
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

  // Makes a get request to check if the user is authenticated
  // and has a valid session.
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
  },

  // This route was used to return all games by a given platform
  getPlat: function(platformId) {
    return axios.get('/platgames/' + platformId, {
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

  // Will request backend to send new content for user to swipe
  // Content should come curated to user's filters and history
  getSwipeContent: function() {
    return axios.get('/swipe', {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return false;
      }
    }).catch(function(err) {
      return err;
    });
  },

  updateSwipe: function(ids) {

    return axios.post('/swipeupdate', {ids:ids}, {
      withCredentials: true
    }).then(function(response) {
      if (response) {
        return response;
      } else {
        return false;
      }
    }).catch(function(err) {
      return err;
    });
  }

}

export default helpers;