const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser');

const TaskModel = require('../models/TaskModel');



router.get('/', (req, res, next) => {
  TaskModel.find((err, tasks) => {
    console.log(`TASKS: ${tasks}`);
    err ? console.log('GET error') : console.log('no GET error');
    res.render('index', { tasks: tasks });
  })
})

router.post('/', (req, res, next) => {
  let task = new TaskModel({
    text: req.body.text,
    quantity: req.body.quantity
  });
  console.log(task, 'hello');
  task.save((err, task) => {
    err ? console.log('save error') : console.log('no save error');
    console.log(task);
    res.redirect('/')
  })
})

module.exports = router
