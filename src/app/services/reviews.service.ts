import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, shareReplay } from "rxjs";
import { Review } from "../model/review.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ReviewsService {

  constructor(private http: HttpClient) { }

  getRandomReviews(reviewCategory?: string): Observable<Review[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': environment.RAPID_API_KEY,
        'X-RapidAPI-Host': environment.RAPID_API_BASE_HOST
      })
    }

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/reviews/${reviewCategory}`, httpOptions)
      .pipe(
        map(res => res),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      );
  }
}
