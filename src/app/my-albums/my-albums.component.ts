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
  myAlbum = [] as AlbumModel[];

  constructor(private httpService: HttpRequestsService){}

  ngOnInit(): void {
    this.httpService.getAllAlbum().subscribe(response => {
      
      const userId = localStorage.getItem('userId');

      this.allAlbums = response;
      this.myAlbum = response.filter(album => {
        return album.createdBy === userId
      });
    });
  }
}
