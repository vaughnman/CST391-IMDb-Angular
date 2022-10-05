import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from 'src/models/album';
import { Review } from 'src/models/review';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  url?: string = "https://internetmusicdatabase.azurewebsites.net";

  constructor(private http: HttpClient) { }
  
  getAlbum(albumId: string) {
    return this.http.get(this.url + '/album/get?albumId=' + albumId);
  }

  getAllAlbums() {
    return this.http.get(this.url + '/album/getAll');
  }

  saveAlbum(album: Album) {
    return this.http.post(this.url + '/album/save', album);
  }

  deleteAlbum(albumId: string) {
    return this.http.delete(this.url + '/album/delete?albumId=' + albumId);
  }

  getReviews(albumId: string)
  {
    return this.http.get(this.url + '/review/get?albumId=' + albumId);
  }
  
  addReview(review: Review)
  {
    return this.http.post(this.url + '/review/add', review);
  }

  deleteReview(reviewId: string)
  {
    return this.http.delete(this.url + '/review/delete?reviewId=' + reviewId);
  }

  getRating(albumId: string)
  {
    return this.http.get(this.url + '/rating/get?albumId=' + albumId);
  }
}
