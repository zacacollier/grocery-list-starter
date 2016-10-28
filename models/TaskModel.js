const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 'text': {
//   type: String,
//   required: true
// },
// 'quantity': {
//   type: String,
//   required: true
// }

const taskSchema = new Schema({
  'text': String,
  'quantity': String
})

module.exports = mongoose.model('Task', taskSchema);
