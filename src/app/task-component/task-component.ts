import { NewTask } from './new-task/new-task';
import { Component, inject, Input } from '@angular/core';
import { SingleTask } from './single-task/single-task';
import { NewTaskData } from './new-task/NewTask-Data.model';
import { TaskService } from './task.service';


@Component({
  imports: [SingleTask,NewTask],
  selector: 'app-task-component',
  styleUrl: './task-component.css',
  templateUrl: './task-component.html',
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  private readonly taskService = inject(TaskService);
  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.tasks().filter((task) => task.userId === this.id);
  }

  completeTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }

  onSubmitNewTask(newTask: NewTaskData) {
    this.taskService.addTask(this.id, newTask);
    this.isAddingTask = false;
  }
}
