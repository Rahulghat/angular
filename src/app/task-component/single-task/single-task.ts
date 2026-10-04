import { Component, Input, Output, EventEmitter } from '@angular/core';
import { task } from './task,model';
@Component({
  imports: [],
  selector: 'app-single-task',
  styleUrl: './single-task.css',
  templateUrl: './single-task.html',
})
export class SingleTask {
  @Input({ required: true }) task!: task;
  @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
