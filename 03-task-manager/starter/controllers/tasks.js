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
    console.log(err);
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${taskID} found` });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `Task with id: ${taskID} was not found` });
    }
    res.status(200).json({ status: true, message: 'Task successfully removed!!' });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `Update failed. No id: ${id} task found.` });
    }
    res.status(200).json({ id: taskID, data: req.body });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
