const express = require('express')
const mongoose = require('mongoose');
const TaskModel = require('./models/TaskModel');
const bodyParser = require('body-parser');
const path = require('path')
const ejs = require('ejs')

mongoose.connect('mongodb://localhost/task-list/');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res, next) => {
  TaskModel.find((err, tasks) => {
    res.render('index', {tasks});
  })
})

app.post('/tasks', (req, res, next) => {
  const task = new TaskModel({
      text: req.body.text
  })
  task.save((err, task) => {
      res.redirect('/')
  })
})

const port = 4000;

app.listen(4000, () => console.log(`Listening on port ${port}`));
