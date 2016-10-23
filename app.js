const express = require('express')
const mongoose = require('mongoose');
const TaskModel = require('./models/TaskModel');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/task-list/');

const app = express();

app.get('/', (req, res, next) => {
  TaskModel.find((err, tasks) => {
    res.json(tasks);
  })
})

app.post('/', (req, res, next) => {
  const task = new TaskModel({
      text: req.body.text
  })
  task.save((err, task) => {
      res.redirect('/')
  })
})

const port = 4000;

app.listen(4000, () => console.log(`Listening on port ${port}`););
