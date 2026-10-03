import { Component , INJECTOR, Input,input, Output,EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  imports: [],
  selector: 'app-user-component',
  styleUrl: './user-component.css',
  templateUrl: './user-component.html',
})
export class UserComponent {
@Input({required: true}) avatar!: string ;
name = input<string>() ;
@Input({}) id!: string ;
@Output() userSelected = new EventEmitter<string>();
//userSelected = output<string>() ;
get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }
  onSelectUser(): void {
    console.log(`User selected: ${this.name}`);
    this.userSelected.emit(this.id);
  }
}
