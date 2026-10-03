import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-task-component',
  styleUrl: './task-component.css',
  templateUrl: './task-component.html',
})
export class TaskComponent {

 @Input({required: true}) username!: string ;

}
