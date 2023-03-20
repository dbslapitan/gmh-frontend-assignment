import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../services/http-requests.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit{

  constructor(private httpService: HttpRequestsService){}

  ngOnInit(): void {
    this.httpService.getAllAlbum().subscribe(response => {
      console.log(response);
    });
  }
}
