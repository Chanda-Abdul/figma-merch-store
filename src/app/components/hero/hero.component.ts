import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, tap } from 'rxjs';
import { Product, filterToFeaturedProducts } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  featuredProducts$!: Observable<Product[]>;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts() {
    const products$ = this.productsService.loadAllProducts();

    // TO-DO => change to custom pipe?
    this.featuredProducts$ = products$
      .pipe(
        map(products =>
          products
          .filter(product => {return product.featured == true})
       
        ),
      );

// this.featuredProducts$.subscribe(val => console.log(val));
     
  }
}
