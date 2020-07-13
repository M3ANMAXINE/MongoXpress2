const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name : { type : String, default: '', required: true },
  lastname : { type : String, default: '', required: true },
  email : { type : String, default: '', required: true },
  password : { type : String, default: '', required: true },
  created_at : { type : Date, default: Date.now },
  updated_at : { type : Date, default: Date.now },
  deleted : { type : Boolean, default: false },
  }, {collection: 'user', usePushEach: true});

module.exports = mongoose.model('tasks', TaskSchema);
