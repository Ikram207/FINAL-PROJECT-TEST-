const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks for a user
router.get('/:userId', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new task
router.post('/', async (req, res) => {
  const { userId, title, status, dueDate } = req.body;
  try {
    const newTask = new Task({ userId, title, status, dueDate });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
