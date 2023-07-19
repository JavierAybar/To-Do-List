import removeTask from '../__mocks__/remove_task.js';

describe('removing task', () => {
  test('remove a task from task list', () => {
    const task = [{
      description: 'Morning',
      completed: false,
    }];
    removeTask(task);
    expect(task).toHaveLength(0);
  });
});