import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$!: Observable<Product>;

sizes = { 
  'S': 'Small', 
  'M': 'Medium', 
  'L': 'Large', 
  'XL': 'Extra Large', 
  '2XL': 'Extra Extra Large' }

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
  
    const productId: number = Number(this.route.snapshot.paramMap.get('productId'));
    // console.log(typeof productId, productId);
    
    
    this.loadProductById(productId);
    
//     const product$ = this.productsService
//     .loadProductById(productId)
//     .pipe(
//       map(res => {console.log(res)
//       return res})
//     );
// console.log(product$)
  }

  loadProductById(productId: any) {
    const productById$ = this.productsService.loadProductById(productId);

    productById$.subscribe(val => console.log(val));

    this.product$ = productById$;
    // this.newProductsFirst$ = products$
    //   .pipe(
    //     map(products => products.sort(sortProductsByNew))
    //   );

    // this.featuredProductsFirst$ = products$
    //   .pipe(
    //     map(products => products.sort(sortProductsByFeatured))
    //   );

    // this.allProductsFeaturedThenNewFirst$ = products$
    //   .pipe(
    //     map(products => [...[...products].sort(sortProductsByNew)].sort(sortProductsByFeatured))
    //   );
  }
}
