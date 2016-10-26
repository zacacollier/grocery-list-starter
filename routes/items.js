const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const TaskModel = require('../models/TaskModel')
const ListController = require('../controllers/ListController')

/*
* GET
*/
router.get('/', ListController.list);

/*
* GET
*/
router.get('/:id', ListController.show);

/*
* POST
*/
router.post('/', ListController.create);

/*
* PUT
*/
router.put('/:id', ListController.update);

/*
* DELETE
*/
router.delete('/:id', ListController.remove);

// router.get('/', (req, res, next) => {
//   TaskModel.find((err, tasks) => {
//     console.log(`TASKS: ${tasks}`);
//     err ? console.log('GET error') : console.log('no GET error');
//     res.render('index', { tasks: tasks });
//   })
// })
//
// router.post('/', (req, res, next) => {
//   let task = new TaskModel({
//     text: req.body.text,
//     quantity: req.body.quantity
//   });
//   console.log(task, 'hello');
//   task.save((err, task) => {
//     err ? console.log('save error') : console.log('no save error');
//     console.log(task);
//     res.redirect('/')
//   })
// })

module.exports = router
