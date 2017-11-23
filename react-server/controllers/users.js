const mongoose = require('mongoose');
mongoose.Promise = Promise;
const User = require('../models/userSchema');

function addUser(req, res, next) {
  console.log(req.body)
  let newUser = new User({
        userName: req.body.userName,
        twitterHandle: req.body.twitterHandle,
        wonLastMatch:false
      });
  newUser.save()
  .catch(err => next(err))
  .then(() => {

      return User.find()
  })
  .then(users => {
      res.status(201);
      res.send(users);
  })
  .catch(err => next(err));
}


function getUsers(req, res, next) {

}
module.exports = {
  addUser,
  getUsers
}
