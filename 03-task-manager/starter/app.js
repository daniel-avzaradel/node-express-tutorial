const express = require('express');
const app = express();

// routes
app.use('/hello', (req, res) => {
  console.log('user hit the resource page');
  res.status(200).send('Task Manager App');
});

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!!`);
});
