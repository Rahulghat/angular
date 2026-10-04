import { Component, INJECTOR, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user-component',
  styleUrl: './user-component.css',
  templateUrl: './user-component.html',
})
export class UserComponent {
  /*@Input({required: true}) avatar!: string ;
@Input({required: true}) name !: string ;
@Input({required: true}) id!: string ;*/

  @Input({ required: true }) user!: User;
  @Output() userSelected = new EventEmitter<string>();
  @Input({ required: true }) selected!: Boolean;
  //userSelected = output<string>() ;
  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser(): void {
    console.log(`User selected: ${this.user.id}`);
    this.userSelected.emit(this.user.id);
  }
}
