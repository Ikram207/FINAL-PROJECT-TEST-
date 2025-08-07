const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Ici user fictif, à remplacer plus tard
  title: { type: String, required: true },
  status: { type: String, enum: ['pending', 'done'], default: 'pending' },
  dueDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
