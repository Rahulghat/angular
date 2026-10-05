import { NewTask } from './new-task/new-task';
import { Component, Input } from '@angular/core';
import { SingleTask } from './single-task/single-task';
import { DUMMY_TASKS } from '../dummy-tasks';


@Component({
  imports: [SingleTask,NewTask],
  selector: 'app-task-component',
  styleUrl: './task-component.css',
  templateUrl: './task-component.html',
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;

  tasks = [...DUMMY_TASKS];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }
}
