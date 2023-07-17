import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      if ((this.searchTerm == 'layers') || (this.searchTerm == 'components')) {
        this.fetchFilteredResults(this.searchTerm)
      }
      else { this.fetchSearchResults(this.searchTerm); }
    })
  }


  scrollToTop() {
    const target = document.documentElement;

    this.renderer.setProperty(target, 'scrollTop', 0);
  }


  fetchSearchResults(searchTerm: string) {
    this.searchResults$ = this.productsService.searchProducts(searchTerm)
    this.searchResults$.subscribe(val => console.log(val.length));
  }

  fetchFilteredResults(searchTerm: string) {
    this.searchResults$ = this.productsService.filterProducts(searchTerm)
    this.searchResults$.subscribe(val => console.log(val.length));
  }
}
