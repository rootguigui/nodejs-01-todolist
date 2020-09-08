const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: false },
});

todoSchema.plugin(mongoosePaginate);

module.exports.Todo = mongoose.model('Todo', todoSchema);