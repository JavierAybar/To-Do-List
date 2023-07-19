import addTask from '../../../test_functions/add_task.js';

describe('add function', () => {
  test('add new task to the task list', () => {
    document.body.innerHTML = `<div>
    <ul id="list"><li></li></ul>
    </div>`;

    const task = [];
    const taskdescription = 'newTask';

    addTask(task, taskdescription);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});
