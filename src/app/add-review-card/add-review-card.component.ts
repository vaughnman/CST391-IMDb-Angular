import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ImdbService } from '../imdb-backend.service';

/** Card for adding reviews */
@Component({
  selector: 'add-review-card',
  templateUrl: './add-review-card.component.html'
})
export class AddReviewCardComponent {

  @Input() albumId?: string;

  constructor(private imdbService: ImdbService) { }

  /** Username setter */
  setUsername = (username: string) => this.username = username;
  username?: string;
  
  /** Rating setter */
  setRating = (rating: string) => this.rating = Number.parseInt(rating);
  rating?: number;

  /** Title setter */
  setTitle = (review: string) => this.title = review;
  title?: string;

  /** Body setter */
  setBody = (body: string) => this.body = body;
  body?: string;

  /** Submits the review and refreshes the page */
  onSubmit() {
    this.imdbService.addReview({
      username: this.username,
      rating: this.rating,
      title: this.title,
      body: this.body,
      albumId: this.albumId
    }).subscribe({
      next: () => { window.location.reload() }, 
      error: (err)=> {window.location.reload()}
    });
  }
}
