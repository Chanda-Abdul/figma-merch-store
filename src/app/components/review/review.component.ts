import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review!: Review;
filledStars:string = ``;
emptyStars:string = ``;


ngOnInit(): void {
 this.getStars(this.review.rating);
}
  getStars(starRating: number){
    this.filledStars = Array(starRating).fill(`<span>&#9733;</span>`).join(``)
    this.emptyStars = Array(5 - starRating).fill(`<span>&#9734;</span>`).join(``)
  
  }


    
}
