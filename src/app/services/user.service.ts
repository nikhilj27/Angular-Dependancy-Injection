import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  constructor() { }

  setUser(newUser) {
    this.user = newUser;
  }

  getUser() {
    return this.user;
  }
}
