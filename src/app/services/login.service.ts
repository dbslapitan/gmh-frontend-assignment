import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = new Subject<boolean>;

  constructor() { }

  updateLoginStatus(){
    this.isLoggedIn.next(localStorage.getItem('idToken') ? true : false);
  }

  removeIdToken(){
    localStorage.removeItem('idToken');
    this.updateLoginStatus();
  }
}
