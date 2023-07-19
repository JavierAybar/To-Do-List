import removeTask from '../__mocks__/remove_task.js';

describe('removing task', () => {
    test('remove a task from task list', () => {
        const task = [{
            description: 'Morning',
            completed: false,
            index: task.length + 1,
        }];
        removeTask(task);
        expect(task).toHaveLength(0);
    });
});