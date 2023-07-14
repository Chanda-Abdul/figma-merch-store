import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, shareReplay } from "rxjs";
import { Review } from "../model/review.model";


@Injectable({
  providedIn: 'root'
})

export class RatingsService {
  /* Stateless Observable Service */
  constructor(private http: HttpClient) { }

  loadRatingsById(productId: number): Observable<Review[]> {

    return this.http.get<any>(`/api/rating/${productId}`)
      .pipe(
        map(res => {
          let reviewsList = res.payload;
          return this.getRandomRatings(productId, reviewsList);
        }),
        shareReplay()
      );
  }

  // TO-DO => (functionality) change to custom pipe 
  getRandomRatings(productId: number, reviewsList: Review[]): Review[] {
    let ratingsToFetchBasedOnProductId = Number(productId
      .toString()
      .charAt(0));

    let randomRatings = reviewsList
      .sort(() => 0.5 - Math.random())
      .slice(0, ratingsToFetchBasedOnProductId);

    return randomRatings;
  }
}
