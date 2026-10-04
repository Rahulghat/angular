import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {

  @Output () cancelAddingTask = new EventEmitter<void>();
  onCancel() {
    this.cancelAddingTask.emit();
  }

}
