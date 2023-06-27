import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, map } from 'rxjs';
import { Product, sortProductsByFeatured, sortProductsByNew } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  allProducts$!: Observable<Product[]>;
  featuredProductsFirst$!: Observable<Product[]>;
  newProductsFirst$!: Observable<Product[]>;
  allProductsFeaturedThenNewFirst$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const products$ = this.productsService.loadAllProducts();

    products$.subscribe(val => console.log(val));

    this.allProducts$ = products$;
    this.newProductsFirst$ = products$
      .pipe(
        map(products => products.sort(sortProductsByNew))
      );

    this.featuredProductsFirst$ = products$
      .pipe(
        map(products => products.sort(sortProductsByFeatured))
      );

    this.allProductsFeaturedThenNewFirst$ = products$
      .pipe(
        map(products => [...[...products].sort(sortProductsByNew)]
          .sort(sortProductsByFeatured))
      );
  }
}