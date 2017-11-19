const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema');

/* GET users. */
router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    console.log(users)
    if(err) {
      res.send(err);
    }
    res.json(users);
  })
});

module.exports = router;
