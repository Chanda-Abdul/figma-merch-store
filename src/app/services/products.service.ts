import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Product } from "../model/product.model";



@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  /* Stateless Observable Service */
  constructor(private http: HttpClient) { }

  loadProductById(productId: number): Observable<Product> {

    return this.http.get<any>(`/api/product/${productId}`).pipe(
      map(res => res),
      shareReplay()
    );
  }

  loadAllProducts(): Observable<Product[]> {

    return this.http.get<any>("/api/products")
      .pipe(
        map(res => res.payload),
        shareReplay()
      );
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<any>(`api/products/${searchTerm}`, {
      params: {
        filter: searchTerm,
        pageSize: 25
      }
    })
    .pipe(
      map(res => res.payload), 
      shareReplay()
    )
    // .subscribe(val => console.log(val));
  }
}
