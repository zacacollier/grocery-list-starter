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
    console.log(`TASKS: ${tasks}`);
    err ? console.log('GET error') : console.log('no GET error');
    res.render('index', { tasks: tasks });
  })
})

app.post('/tasks', (req, res, next) => {
  const task = new TaskModel({
    text: req.body.text,
    quantity: req.body.quantity
  })

  task.save((err, task) => {
    err ? console.log('save error') : console.log('no save error');
    console.log(task);
    res.redirect('/')
  })
})

const port = 4000;

app.listen(4000, () => console.log(`Listening on port ${port}`));
