import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTaskData } from './new-task/NewTask-Data.model';
import { type task } from './single-task/task,model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly taskList = signal<task[]>([...DUMMY_TASKS]);
  private nextTaskNumber = DUMMY_TASKS.length + 1;

  readonly tasks = this.taskList.asReadonly();

  addTask(userId: string, taskData: NewTaskData): task {
    const newTask: task = {
      id: `t${this.nextTaskNumber++}`,
      userId,
      ...taskData,
    };

    this.taskList.update((tasks) => [newTask, ...tasks]);
    return newTask;
  }

  deleteTask(taskId: string): void {
    this.taskList.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  updateTask(taskId: string, updates: Partial<NewTaskData>): void {
    this.taskList.update((tasks) =>
      tasks.map((task) => task.id === taskId ? { ...task, ...updates } : task),
    );
  }
}
