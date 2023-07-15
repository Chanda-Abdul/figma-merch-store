import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResults$!: Observable<Product[]>;

  searchTerm!: any;
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      this.fetchSearchResults(this.searchTerm);
      console.log(params['searchTerm'], this.searchResults$)
    })

  }
  fetchSearchResults(searchTerm: string) {
    this.searchResults$ = this.productsService.searchProducts(searchTerm)
    this.searchResults$.subscribe(val => console.log(val.length));
  }
}
