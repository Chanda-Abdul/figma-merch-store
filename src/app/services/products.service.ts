import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";
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

  constructor(private http: HttpClient) { }

  updateSelectedCountry(newCountry: string) {
    this.selectedCountry.next(newCountry);
  }

  loadExchangeRates(): Observable<any> {
    let exchangeRates;

    return this.http
      .get<any>(`https://api.currencybeacon.com/v1/latest?api_key=${environment.CONVERTER_API_KEY}`)
      .pipe(
        map((res: any) => {
          const rates = res;
          exchangeRates = {
            'USD': { country: 'United States', selectOption: 'store', exchangeRate: 1 },
            'CAD': { country: 'Canada', selectOption: 'store-ca', exchangeRate: rates.rates['CAD'] },
            'EUR': { country: 'European Union', selectOption: 'store-eu', exchangeRate: rates.rates['EUR'] },
            'JPY': { country: 'Japan', selectOption: 'store-jp', exchangeRate: rates.rates['JPY'] },
            'GBP': { country: 'United Kingdom', selectOption: 'store-uk', exchangeRate: rates.rates['GBP'] },
          }
          return exchangeRates;
        }),
        shareReplay(),
      )
  }


  loadProductById(productId: number): Observable<Product> {

    return this.http.get<any>(`/api/product/${productId}`).pipe(
      map(res => res),
      shareReplay()
    );
  }

  loadAllProducts(): Observable<Product[]> {
    // if (this.data === undefined) 
    this.loadExchangeRates()
    return this.http.get<any>("/api/products")
      .pipe(
        map(res => res.payload),
        shareReplay()
      );
  }

  loadFeaturedProducts(): Observable<Product[]> {
    //abstract to loadAllProducts()
    return this.http.get<any>("/api/products")
      .pipe(
        map(res => res.payload),
        map((res) => res.slice(0, 10)),
        shareReplay()
      );
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<any>(`api/products/${searchTerm}`, {
      params: {
        search: searchTerm,
        pageSize: 25
      }
    })
      .pipe(
        // map(res => res.payload), 
        shareReplay()
      )
    // .subscribe(val => console.log(val));
  }
  filterProducts(filterTerm: string): Observable<Product[]> {
    return this.http.get<any>(`api/products`, {
      params: {
        filter: filterTerm,
        pageSize: 50
      }
    })
      .pipe(
        map(res => res.payload),
        tap(val => console.log(val)),
        shareReplay()
      )

  }
}
