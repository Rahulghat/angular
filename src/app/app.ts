import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { UserComponent } from './user-component/user-component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule ,NgForOf,SlicePipe} from '@angular/common';
@Component({
  imports: [HeaderComponent, UserComponent, NgForOf, SlicePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(userId: string): void {
    console.log(`User selected in App component: ${userId}`);
  }
}
