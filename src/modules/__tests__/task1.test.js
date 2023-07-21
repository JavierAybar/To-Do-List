import addNewTask from '../add_new_task.js';

jest.mock('../data.js', () => ({
  addImput: {
    value: 'new task',
  },
}));

describe('add function', () => {
  test('add new task to the task list', () => {
    const task = [];

    addNewTask(task);
    expect(task).toHaveLength(1);
  });
});
