import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { Product } from "../model/product.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private selectedCountry = new BehaviorSubject('store')
  currentCountry = this.selectedCountry.asObservable();

  private exchangeRates = new BehaviorSubject('');
  currentExchangeRates = this.exchangeRates.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': environment.RAPID_API_KEY,
      'X-RapidAPI-Host': environment.RAPID_API_BASE_HOST
    })
  }

  constructor(private http: HttpClient) { }

  updateSelectedCountry(newCountry: string) {
    this.selectedCountry.next(newCountry);
  }

  loadExchangeRates(): Observable<any> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/rates`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadAllProducts(): Observable<Product[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/products`, this.httpOptions)
      .pipe(
        map(res => res),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }


  loadProductById(productId: number): Observable<Product> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/product/${productId}`, this.httpOptions)
      .pipe(
        map(res => res[0]),

        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      );
  }

  loadFeaturedProducts(): Observable<Product[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/products/featured`, this.httpOptions)
      .pipe(
        map(res => res),
        shareReplay()
      );
  }

  searchProducts(searchTerm: string): Observable<Product[]> {

    return this.http.get<any>(`{environment.RAPID_API_BASE_URL}/products/${searchTerm}`, this.httpOptions)
      .pipe(
        tap(val => console.log(val)),
        shareReplay()
      )
  }

  filterProducts(filterTerm: string): Observable<Product[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/products/${filterTerm}`, this.httpOptions)
      .pipe(
        map(res => res),
        tap(val => console.log(val)),
        shareReplay()
      )
  }
}
