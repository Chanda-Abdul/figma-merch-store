import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { Product } from "../model/product.model";
import { PRODUCTS } from "server/db-data";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  /* Stateless Observable Service */
  constructor(private http: HttpClient) { }

  loadProductById(productId: number): Observable<any> {

    return this.http.get(`/api/product/${productId}`).pipe(
      map(res => res),
      shareReplay()
    );
  }

  loadAllProducts(): Observable<any> {
    
    return this.http.get<any>("/api/products")
      .pipe(
        map(res => res.payload),
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
