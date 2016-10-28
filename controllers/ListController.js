const TaskModel = require('../models/TaskModel')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let ListController = {

  list: function(req, res, next) {
    TaskModel.find('tasks').exec()
    .then(tasks => res.json(tasks))
    .catch(err => next(err))
  },

  show: function(req, res, next) {
    // let match = TaskModel.where({ _id: req.params.id })
    // TaskModel.findOne(match).exec()
    TaskModel.findById(req.params.id).exec()
    .then(match => res.json(match))
    .catch(err => next(err))
  },

  create: function(req, res, next) {
    let task = new TaskModel({
      text: req.body.text,
      quantity: req.body.quantity
    })
    task.save()
    .then(task => res.json(task))
    .catch(err => next(err))
  },

  update: function(req, res, next) {
    TaskModel.findByIdAndUpdate({ _id: req.params.id }, {
      text: req.body.text,
      quantity: req.body.quantity
    }, { new: true }).exec()
    .then(tasks => res.json(tasks))
    .catch(err => next(err))
  },

  remove: function(req, res, next) {
    let id = req.params.id
    TaskModel.findByIdAndRemove({_id: id}).exec()
    .then(tasks => res.json(tasks))
    .catch(err => next(err))
  }
}

module.exports = ListController
