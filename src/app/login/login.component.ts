import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCredentials } from '../models/user-credentials.model';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoggedIn = false;
  selected = 0;

  signInForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  signUpForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private fireAuth: AuthService, private loginService: LoginService ){

  }

  onSignIn(){
    console.log(this.signInForm.getRawValue());
    /*this.fireAuth.signIn(this.signInForm.getRawValue() as UserCredentials).then(response => {
      console.log('Sign In Successfully!!!');
      response.user.getIdToken().then(accessToken => {
        console.log(accessToken);
      })
      this.fireAuth.isLogInSubject.next(true);
    }).catch(error => {
      console.log(error.message);
      alert(error.message);
    });*/
    this.fireAuth.signIn(this.signInForm.getRawValue() as UserCredentials).then(response => {
      localStorage.setItem('userId', response.user.email as string);
      return response.user.getIdToken() as Promise<string>}).then(accessToken => {
      localStorage.setItem('idToken', accessToken);
      this.loginService.updateLoginStatus();
      }).catch(error => {
        localStorage.removeItem('userId');
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
      alert(error.message);
    });
  }

  logout(){
    this.fireAuth.userSignOut().catch(error => {
      alert(error.message)
    });
    this.loginService.removeIdToken();
  }

  ngOnInit(){
    this.loginService.isLoggedIn.subscribe({
      next: status => this.isLoggedIn = status
    });
  }

}
