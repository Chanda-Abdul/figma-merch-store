import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/model/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() reviews!: Observable<Review[]>;
  @Input() averageRating!: number;
  @Input() averageRatingStars!: string;

  mobileView: boolean = true;
     // TO-DO => add screen size listener, set mobile init to false?
  showReviews: boolean = true;

  ngOnInit(): void {

  }

  getStars(starRating: number): string {
    return Array(starRating).fill(`<span>&#9733;</span>`)
      .concat(Array(5 - starRating).fill(`<span>&#9734;</span>`))
      .join(``);
  }
  toggleReviews() {
    this.showReviews = !this.showReviews;
    // console.log(this.showReviews)
  }
}
