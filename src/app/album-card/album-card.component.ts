import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/models/album';
import { ImdbService } from '../imdb-backend.service';

/** Card for displaying albums */
@Component({
  selector: 'album-card',
  templateUrl: './album-card.component.html',
  inputs: ['album']
})
export class AlbumCardComponent implements OnInit {

  @Input() album?: Album;

  rating?: number;

  constructor(private imdbService: ImdbService) { }

  /** Retrieves album rating for display */
  ngOnInit(): void {
    if(this.album?.albumId)
      this.imdbService.getRating(this.album?.albumId).subscribe(data => {
        this.rating = data as any;
      });
    else
      console.log("Couldn't find album id for album card");
  }

}
