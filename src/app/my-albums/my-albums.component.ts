import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../models/albums.model';
import { HttpRequestsService } from '../services/http-requests.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit{

  allAlbums = [] as AlbumModel[];
  myAlbums = [] as AlbumModel[];
  userId = localStorage.getItem('userId');

  constructor(private httpService: HttpRequestsService){}

  ngOnInit(): void {
    this.httpService.getAllAlbum().subscribe(response => {
      this.allAlbums = response;
      this.myAlbums = response.filter(album => {
        return album.createdBy === this.userId
      });
      console.log(this.allAlbums);
      console.log(this.myAlbums);
    });
  }
}
