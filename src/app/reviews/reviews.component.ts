import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Review } from 'src/models/review';
import { ImdbService } from '../imdb-backend.service';

/** Reviews list  */
@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  @Input() albumId?: string;

  reviews: Review[] = [];
  
  constructor(private imdbService: ImdbService) { }

  /** Retrieves all reviews for the input albumId */
  ngOnInit(): void {
    if(!this.albumId) return;

    from(this.imdbService.getReviews(this.albumId)).subscribe(data => {
      this.reviews = data as any; 
    });
  }

}
