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
* GET ONE
*/
router.get('/:id', ListController.show);

/*
* POST
*/
router.post('/', ListController.create);

/*
* UPDATE
*/
router.put('/:id', ListController.update);

/*
* DELETE
*/
router.delete('/:id', ListController.remove);

module.exports = router
