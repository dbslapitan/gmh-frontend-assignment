import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { AlbumModel } from '../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: HttpClient) { }

  getAllAlbum(){
    return this.http.get<[AlbumModel]>("http://localhost:8080/api/albums/");
  }
}
