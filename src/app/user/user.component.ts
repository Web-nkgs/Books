import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  users = ['Luis', 'Vanessa', 'Ali'];
  username = '';
  isVisible = false;

  constructor() {
    setTimeout(() => {
      this.isVisible = true;
    }, 3000);
  }

  addUser() {
    this.users.push(this.username);
  }
}
