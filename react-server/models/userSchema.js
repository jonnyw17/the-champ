const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  twitterHandle: String,
  wonLastMatch: Boolean
}, {collection: 'theChamp'});

const newUser = mongoose.model('User', User)
module.exports = newUser
