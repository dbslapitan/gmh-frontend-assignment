import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = new BehaviorSubject(false);

  constructor() { }

  updateLoginStatus(){
    this.isLoggedIn.next(localStorage.getItem('idToken') ? true : false);
  }

  removeIdToken(){
    localStorage.removeItem('idToken');
    localStorage.removeItem('userId');
    this.updateLoginStatus();
  }
}
