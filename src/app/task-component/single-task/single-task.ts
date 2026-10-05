import { Component, Input, Output, EventEmitter } from '@angular/core';
import { task } from './task,model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
@Component({
  imports: [Card, DatePipe],
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
