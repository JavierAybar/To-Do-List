const prueba = (listTasks) => {
  const testcheck = document.querySelectorAll('.check__box');

  testcheck.forEach((checkbox) => {
    const IconChecked = checkbox.parentNode;
    const index = Array.from(IconChecked.parentNode.children).indexOf(IconChecked);
    checkbox.checked = listTasks[index].completed;

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        checkbox.parentNode.classList.add('line__check');
        listTasks[index].completed = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(listTasks));
      } else {
        checkbox.parentNode.classList.remove('line__check');
        listTasks[index].completed = checkbox.checked;
      }
      localStorage.setItem('tasks', JSON.stringify(listTasks));
    });
  });
};
export default prueba;
