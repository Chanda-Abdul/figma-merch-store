import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, shareReplay } from "rxjs";
import { Rating } from "../model/rating.model";

@Injectable({
  providedIn: 'root'
})

export class RatingsService {
  /* Stateless Observable Service */
  constructor(private http: HttpClient) { }

  loadRatingsById(productId: number): Observable<Rating[]> {

    return this.http.get<any>(`/api/rating/${productId}`)
      .pipe(
        map(res => {
          let ratings = res.payload;
          return this.getRandomRatings(productId, ratings);
        }),
        shareReplay()
      );
  }

  getRandomRatings(productId: number, ratingsList: Rating[]): Rating[] {
    let ratingsToFetchBasedOnProductId = Number(productId
      .toString()
      .charAt(0));

    let randomRatings = ratingsList
      .sort(() => 0.5 - Math.random())
      .slice(0, ratingsToFetchBasedOnProductId);

    return randomRatings;
  }
}
