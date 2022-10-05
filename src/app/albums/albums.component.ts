import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ImdbService } from '../imdb-backend.service';
import { Album } from 'src/models/album';
import { from } from 'rxjs';

/** Albums page */
@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private imdbBackendService: ImdbService) { }

  /** Retrieves all albums */
  ngOnInit(): void {
    from(this.imdbBackendService.getAllAlbums()).subscribe(data => {
      this.albums = data as any;
    });
  }

}
