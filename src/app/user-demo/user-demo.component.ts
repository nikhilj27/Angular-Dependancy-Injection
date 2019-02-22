import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {

  userName: string;
  // removed `userService` because of constructor shorthand below

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`.
  constructor(private userService: UserService) {
    // empty because we don't have to do anything else!
   }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nikhil Jadhav'
    });

    this.userName = this.userService.getUser().name;
    console.log('User Name is:', this.userName)
  }

}
