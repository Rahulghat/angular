import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { UserComponent } from './user-component/user-component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task-component/task-component';
@Component({
  imports: [HeaderComponent, UserComponent,  TaskComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = '';
  get selectedUser() {
    return (
      this.users.find((user) => user.id === this.selectedUserId)
    );
  }
  onSelectUser(userId: string): void {
    this.selectedUserId = userId;
  }
}
