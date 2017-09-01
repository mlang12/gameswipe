// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
  email: String,
  password: String,
  displayName: String,
  dateSignup: Date,
  like: Array,
  dontLike: Array,
  profile: {
    systems: Array,
    genres: Array,
  },
  local:{
    email: String,
    password: String
  }
});

// Hashes the password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Checking password valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);