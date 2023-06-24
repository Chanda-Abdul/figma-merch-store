import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  // Stateless Observable Service
  constructor(private http: HttpClient) { }

  loadAllProducts(): Observable<any> {
    return this.http.get<any>("/api/products")
      .pipe(
        map(res => res.payload),
        // tap(res=> console.log(res)),
        //to avoid duplicate http requests
        shareReplay()
      );
  }

  // saveProducts(productId: string, changes: Partial<Product>): Observable<any> {
  //   return this.http.put(`/api/products/${productId}`, changes)
  //     .pipe(
  //       shareReplay()
  //     );
  // }
}
