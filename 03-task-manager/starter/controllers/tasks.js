const getAllTasks = (req, res) => {
  res.status(200).send('All Items from the file!');
};

const createTask = (req, res) => {
  res.status(201).send('Task created successfully!');
};

const updateTask = (req, res) => {
  res.status(200).send('Show single task');
};

const getTask = (req, res) => {
  res.status(200).send('Task created successfully!');
};

const deleteTask = (req, res) => {
  res.status(200).send('Task successfully removed!');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
