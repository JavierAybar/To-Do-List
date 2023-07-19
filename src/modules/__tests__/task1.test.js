import addTask from '../../../test_functions/add_task.js';

describe('add function', () => {
  test('add new task to the task list', () => {
    const task = [];
    const taskdescription = 'newTask';

    addTask(task, taskdescription);
    expect(task).toHaveLength(1);
  });
});
