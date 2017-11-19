const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  currentChamp: Boolean,
})
// {
// 	"_id" : ObjectId("5a0f2d8ac1d41f094cec154c"),
// 	"userName" : "Anthony",
// 	"currentChamp" : false
// }
module.exports = mongoose.model('User', User)
