import './style.css';
import updateIcon from './assets/update-icon.svg';
import renderTodoList from './modules/render_todo.js';
import addNewTask from './modules/add_new_task.js';
import { removeTask, updateTaskIndexes } from './modules/remove_task.js';
import { addImput, listContainer } from './modules/data.js';
import prueba from './modules/update_status.js';

const iconUpdate = document.querySelector('.update__icon');
iconUpdate.setAttribute('src', updateIcon);

let listTasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderTodoList(listTasks);
// Show new task in list when press enter key
const btnSubmit = document.querySelector('.submit__btn');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  addNewTask(listTasks);
  addImput.value = '';

  renderTodoList(listTasks);
  localStorage.setItem('tasks', JSON.stringify(listTasks));
});

// clear all completed task
const clearAllCompTask = () => {
  const btnClear = document.querySelector('.btn__clear');
  btnClear.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.check__box:checked');
    checkboxes.forEach((checkbox) => {
      const itemRemoved = checkbox.parentNode;
      const index = Array.from(itemRemoved.parentNode.children).indexOf(itemRemoved);
      listTasks = listTasks.filter((_, i) => i !== index);
      updateTaskIndexes(listTasks);
      itemRemoved.remove();
    });
    localStorage.setItem('tasks', JSON.stringify(listTasks));
  });
};

clearAllCompTask();

// Remove task with trash-icon and update index
removeTask(listTasks);

// edit task when you click de input
const editTask = () => {
  const taskEdit = document.querySelectorAll('.edit__content');
  listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit__content')) {
      taskEdit.forEach((editContent) => {
        editContent.contentEditable = true;
        editContent.addEventListener('input', () => {
          const parentTask = event.target.parentNode;
          const index = Array.from(parentTask.parentNode.children).indexOf(parentTask);
          const updateDescription = editContent.textContent;
          listTasks[index].description = updateDescription;
          localStorage.setItem('tasks', JSON.stringify(listTasks));
        });
      });
    }
  });
};

editTask();

// Update status checkbox complete
prueba(listTasks);