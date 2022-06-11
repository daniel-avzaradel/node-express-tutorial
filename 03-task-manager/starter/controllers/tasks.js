const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.json({ message: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = (req, res) => {
  res.status(200).json({ status: true, message: 'Task updated successfully!' });
};

const getTask = (req, res) => {
  res.status(200).json(req.params);
};

const deleteTask = (req, res) => {
  res.status(200).json({ status: true, message: 'Task successfully removed!!' });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
