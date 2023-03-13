import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signInForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  signUpForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder){

  }

  onSignIn(){
    console.log(this.signInForm.getRawValue());
  }

  onSignUp(){
    console.log(this.signUpForm.getRawValue());
  }

}
