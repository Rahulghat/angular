import { Component, Input } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-single-task',
  styleUrl: './single-task.css',
  templateUrl: './single-task.html',
})
export class SingleTask {

  @Input({required: true}) task!: any;



}
