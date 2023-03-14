import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { UserCredentials } from '../models/user-credentials.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogInSubject = new Subject<boolean>;

  constructor(private fireAuth: Auth) { }

  signUp(userCredentials: UserCredentials){
    return createUserWithEmailAndPassword(this.fireAuth, userCredentials.email, userCredentials.password);
  }

  signIn(userCredentials: UserCredentials){
    return signInWithEmailAndPassword(this.fireAuth, userCredentials.email, userCredentials.password);
  }

  userSignOut(){
    return signOut(this.fireAuth);
  }
}
