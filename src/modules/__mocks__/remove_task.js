const removeTask = (listTasks) => {
  listTasks.pop();
  localStorage.setItem('tasks', JSON.stringify(listTasks));
};

export default removeTask;