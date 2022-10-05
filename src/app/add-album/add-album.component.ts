import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbService } from '../imdb-backend.service';

/** The "Add Album" page, reused for updating an album */
@Component({
  selector: 'add-album',
  templateUrl: './add-album.component.html'
})
export class AddAlbumComponent implements OnInit {

  constructor(private imdbService: ImdbService, private route: ActivatedRoute) { }

  albumId?: string;

  timestampAddedMs?: number;

  /** Image Url setter */
  setImageUrl = (url: string) => this.imageUrl = url;
  imageUrl?: string;

  /** Name setter */
  setName = (name: string) => this.name = name;
  name?: string;

  /** Band setter */
  setBand = (band: string) => this.band = band;
  band?: string;

  /** Release Date setter */
  setReleaseDate = (releaseDate: string) => this.releaseDate = releaseDate;
  releaseDate?: string;

  /** Retrieves album on init if the :id route parameter is present */
  ngOnInit(): void {
    if(this.route.snapshot.params['id'])
    {
      this.albumId = this.route.snapshot.params['id'];
      this.imdbService.getAlbum(this.albumId ?? "").subscribe(data => {
        const album = data as any;
        this.imageUrl = album.imageUrl;
        this.name = album.name;
        this.band = album.band;
        this.releaseDate = album.releaseDate;
        this.timestampAddedMs = album.timestampAddedMs;
      });
    }
  }

  /** Submits the album and takes the user to the albums page */
  onSubmit = () => {
    this.imdbService.saveAlbum({
      albumId: this.albumId,
      timestampAddedMs: this.timestampAddedMs,
      name: this.name,
      band: this.band,
      imageUrl: this.imageUrl,
      releaseDate: this.releaseDate,
    }).subscribe({
      next: () => { window.location.href = '/albums' },
      error: (err) => { window.location.href = '/albums' },
    });
  }

}
