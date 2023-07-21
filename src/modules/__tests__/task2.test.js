import { removeTask } from '../remove_task.js';

describe('removing task', () => {
  test('remove a task from task list', () => {
    const listTasks = [];
    const task = [{
      description: 'Morning',
      completed: false,
    }];
    removeTask(listTasks);
    expect(task).toHaveLength(0);
  });
});