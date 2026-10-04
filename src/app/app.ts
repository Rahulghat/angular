import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { UserComponent } from './user-component/user-component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule, NgForOf, SlicePipe } from '@angular/common';
import { TaskComponent } from './task-component/task-component';
@Component({
  imports: [HeaderComponent, UserComponent, NgForOf, SlicePipe, TaskComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  user = signal({ id: '', name: '', avatar: '' });
  onSelectUser(userId: string): void {
    console.log(`User selected in App component: ${userId}`);
    this.user.set(this.users.find(user => user.id === userId) || { id: '', name: '', avatar: '' });
  }
}
