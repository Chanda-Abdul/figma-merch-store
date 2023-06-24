import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product.model';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {

  allProducts$!: Observable<Product[]>;
  newProducts$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const products$ = this.productsService.loadAllProducts();

    products$.subscribe(val => console.log(val));

    this.allProducts$ = products$;
    this.newProducts$ = products$
      .pipe(
        map(products => products
          .filter((product: Product) => product.new == true))
      );
  }
}
