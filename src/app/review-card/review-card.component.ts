import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/models/review';
import { ImdbService } from '../imdb-backend.service';


/** Card for displaying review info */
@Component({
  selector: 'review-card',
  templateUrl: './review-card.component.html'
})
export class ReviewCardComponent {
  rating?: number;

  @Input() review?: Review;

  constructor(private imdbService: ImdbService) {}

  /** Deletes the review and reloads the page */
  onDelete() {
    if(this.review?.reviewId)
      this.imdbService.deleteReview(this.review?.reviewId).subscribe(() => {
        window.location.reload();
      });
    else
      console.log("Couldn't find review id for review card");
  }
}
