import { TestBed } from '@angular/core/testing';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('adds a task with a unique id', () => {
    const addedTask = service.addTask('u1', {
      title: 'New task',
      summary: 'Task summary',
      dueDate: '2026-10-06',
    });

    expect(addedTask.userId).toBe('u1');
    expect(service.tasks()[0]).toEqual(addedTask);
    expect(addedTask.id).not.toBe(DUMMY_TASKS[0].id);
  });

  it('deletes a task by id', () => {
    const taskId = DUMMY_TASKS[0].id;

    service.deleteTask(taskId);

    expect(service.tasks().some((task) => task.id === taskId)).toBe(false);
  });

  it('updates task details without changing its id or owner', () => {
    const originalTask = DUMMY_TASKS[0];

    service.updateTask(originalTask.id, { title: 'Updated title' });

    expect(service.tasks()[0]).toEqual({
      ...originalTask,
      title: 'Updated title',
    });
  });
});
