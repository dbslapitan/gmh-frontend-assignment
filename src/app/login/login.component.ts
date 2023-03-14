import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCredentials } from '../models/user-credentials.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoggedIn = false;
  selected = 1;

  signInForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  signUpForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private fireAuth: AuthService, ){

  }

  onSignIn(){
    console.log(this.signInForm.getRawValue());
    this.fireAuth.signIn(this.signInForm.getRawValue() as UserCredentials).then(response => {
      console.log('Sign In Successfully!!!');
      this.fireAuth.isLogInSubject.next(true);
    }).catch(error => {
      console.log(error.message);
      alert(error.message);
    });
  }

  onSignUp(){
    console.log(this.signUpForm.getRawValue());
    this.fireAuth.signUp(this.signUpForm.getRawValue() as UserCredentials).then(response => {
      console.log('Registered Successfully!!!');
      this.selected = 0;
      this.signUpForm.reset();
    }).catch(error => {
      console.log(error.message);
      alert(error.message);
    });
  }

  logout(){
    this.fireAuth.userSignOut();
    this.fireAuth.isLogInSubject.next(false);
  }

  ngOnInit(){
    this.fireAuth.isLogInSubject.subscribe({
      next: status => this.isLoggedIn = status
    });
  }

}
