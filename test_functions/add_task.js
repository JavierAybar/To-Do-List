const addTask = (task, taskdescription) => {
  const newtask = {
    description: taskdescription,
    completed: false,
    index: task.length + 1,
  };

  task.push(newtask);
  localStorage.setItem('tasks', JSON.stringify(task));
};

export default addTask;