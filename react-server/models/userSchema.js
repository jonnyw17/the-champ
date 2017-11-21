const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  currentChamp: Boolean
}, {collection: 'theChamp'});

module.exports = mongoose.model('User', User)
