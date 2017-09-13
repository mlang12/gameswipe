// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
const passportLocalMongoose = require('passport-local-mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
  email: String,
  password: String,
  username: String,
  dateSignup: Date,
  like: Array,
  dontLike: Array,
  seen: Array,
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

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);