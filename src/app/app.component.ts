import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment3';
  isLoggedIn = false;

  constructor(private loginService: LoginService){
  }

  ngOnInit(){
    this.loginService.updateLoginStatus();
    this.loginService.isLoggedIn.subscribe({
      next: status => this.isLoggedIn = status
    });
  }
}
