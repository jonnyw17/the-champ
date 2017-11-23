const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {getUsers} = require('./controllers/users');
const cors = require('cors');
mongoose.Promise = Promise;
const db = "mongodb://localhost:27017/theChamp";
mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));

const assert = require('assert');
app.post('/api/users', getUsers)
app.use(cors())
app.listen(() => {
  console.log('Server listening at port 3001');
});


module.exports = app;
