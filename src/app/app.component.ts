import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment3';
  isLoggedIn = false;

  constructor(private fireAuth: AuthService){
  }

  ngOnInit(){
    this.fireAuth.isLogInSubject.subscribe({
      next: status => this.isLoggedIn = status
    });
  }
}
