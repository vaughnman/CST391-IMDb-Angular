import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/models/album';
import { ImdbService } from '../imdb-backend.service';

/** Album page */
@Component({
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements OnInit {
  deleted: boolean = false;
  album?: Album;
  rating?: number;

  constructor(private route: ActivatedRoute, private imdbService: ImdbService) {}

  /** Retrieves album and its rating */
  ngOnInit(): void {
    this.imdbService.getAlbum(this.route.snapshot.params['id']).subscribe(data => {
      this.album = data as any;
    });

    this.imdbService.getRating(this.route.snapshot.params['id']).subscribe(data => {
      this.rating = data as any;
    });
  }

  /** Deletes the album and takes the user to the albums page */
  onDelete() 
  {
    this.imdbService.deleteAlbum(this.route.snapshot.params['id']).subscribe(() => {
      this.deleted = true;
      window.location.href = "/albums";
    });
  }

  /** Takes the user to the add-album/update-album page */
  onUpdate()
  {
    window.location.href = "/update-album/" + this.route.snapshot.params['id'];
  }
}
