import './style.css';
import points from './assets/point.png';
import updateIcon from './assets/update-icon.svg';

const iconUpdate = document.querySelector('.update__icon');
iconUpdate.setAttribute('src', updateIcon);

const toDoTask = [
  {
    description: 'task 1',
    completed: true,
    index: 2,
  },
  {
    description: 'task 2',
    completed: false,
    index: 0,
  },
  {
    description: 'task 3',
    completed: true,
    index: 1,
  },
];

const renderTodoList = () => {
  const listContainer = document.querySelector('.list__container');

  const listSort = toDoTask.sort((a, b) => a.index - b.index);

  listSort.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task__item');

    listItem.innerHTML = `
    <input class="check__box" type="checkbox">
    <p>${task.description}</p>
    <img class="points__img" src=${points} alt="">
    `;
    listContainer.appendChild(listItem);
  });
};

renderTodoList();