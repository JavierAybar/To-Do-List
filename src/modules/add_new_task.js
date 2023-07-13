import { addImput } from './data.js';

const addNewTask = (task) => {
  const taskdescription = addImput.value;
  const newtask = {
    description: taskdescription,
    completed: false,
    index: task.length + 1,
  };

  task.push(newtask);

  localStorage.setItem('tasks', JSON.stringify(task));
};

export default addNewTask;