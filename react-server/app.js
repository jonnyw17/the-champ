const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = Promise;
const db = "mongodb://localhost:27017/theChamp"
mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));

const assert = require('assert');

const users = require('./routes/api/users')
app.use('/api/users', users);

// app.post('/insert', (req, res, next) => {
//   let userOne = {
//     playerOne: req.body.playerOne,
//     twitter: req.body.twitterHandle
//   }
//   mongoose.connect(db, (err, db) => {
//     assert.equal(null, err);
//     db.collection('user-data').insertOne(item, (err, result) => {
//       assert.equal(null, err);
//       console.log('Item inserted')
//       db.close();
//     });
//   })
// })


app.listen(() => {
  console.log('Server listening at port 3001');
});


module.exports = app;
