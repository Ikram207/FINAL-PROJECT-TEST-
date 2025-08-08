const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: true },
  status: { type: String, enum: ['pending','in-progress','done'], default: 'pending' },
  dueDate: { type: Date },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
