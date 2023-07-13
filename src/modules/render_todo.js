import points from '../assets/point.png';
import trash from '../assets/trash-icon.svg';
import { listContainer } from './data.js';

const renderTodoList = (Tasks) => {
  listContainer.innerHTML = '';

  Tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task__item');

    listItem.innerHTML = `
      <input class="check__box" type="checkbox" data-index="${index}">
      <p class="edit__content" contentEditable="">${task.description}</p>
      <img class="trash__img" src=${trash} alt="">
      <img class="points__img" src=${points} alt="">
      `;
    listContainer.appendChild(listItem);
  });
};

export default renderTodoList;