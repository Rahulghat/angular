import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './NewTask-Data.model';
@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  @Output() cancelAddingTask = new EventEmitter<void>();
  @Output() submitNewTask = new EventEmitter<NewTaskData>();
  onCancel() {
    this.cancelAddingTask.emit();
  }


onSubmit() {
    this.submitNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });

  }

}
