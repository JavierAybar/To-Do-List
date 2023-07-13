import renderTodoList from './render_todo.js';
import { listContainer } from './data.js';

const updateTaskIndexes = (listTasks) => {
  listTasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

const removeTask = (listTasks) => {
  listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('trash__img')) {
      const iconRemoved = event.target.parentNode;
      const index = Array.from(iconRemoved.parentNode.children).indexOf(iconRemoved);
      listTasks.splice(index, 1);
      updateTaskIndexes(listTasks);
      iconRemoved.remove();
      localStorage.setItem('tasks', JSON.stringify(listTasks));
      renderTodoList(listTasks);
    }
  });
};

export { removeTask, updateTaskIndexes };