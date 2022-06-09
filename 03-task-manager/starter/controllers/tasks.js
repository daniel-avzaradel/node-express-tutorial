const getAllTasks = (req, res) => {
  res.status(200).send('All Items from the file!');
};

const createTask = (req, res) => {
  console.log('data received:', req.body);
  res.status(201).json(req.body);
};

const updateTask = (req, res) => {
  res.status(200).json({ status: true, message: 'Task updated successfully!' });
};

const getTask = (req, res) => {
  res.status(200).json(req.params);
};

const deleteTask = (req, res) => {
  res.status(200).json({ status: true, message: 'Task successfully removed!' });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
