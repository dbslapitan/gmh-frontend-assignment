import { Component, Input } from '@angular/core';
import { AlbumModel } from '../models/albums.model';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {
  @Input() album = {} as AlbumModel;
}
