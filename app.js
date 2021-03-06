const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

const app = express();

// const index = require('./routes/index.js')
const items = require('./routes/items.js');

mongoose.connect('mongodb://localhost/task-list/');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', items);
app.use('/*', (req, res, next) => {
  res.redirect('/tasks')
});

const port = 4000;

app.listen(4000, () => console.log(`Listening on port ${port}`));
