import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { Rating } from 'src/app/model/rating.model';
import { ProductsService } from 'src/app/services/products.service';
import { RatingsService } from 'src/app/services/ratings.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$!: Observable<Product>;
  ratings$!: Observable<Rating[]>;

  sizes = {
    'S': 'Small',
    'M': 'Medium',
    'L': 'Large',
    'XL': 'Extra Large',
    '2XL': 'Extra Extra Large'
  }

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService, 
    private ratingsService: RatingsService) { }

  ngOnInit() {

    const productId: number = Number(this.route.snapshot.paramMap.get('productId'));
  
    this.loadProductById(productId);
    
    this.loadRatingById(productId);
  }

  loadProductById(productId: any) {
    const productById$ = this.productsService.loadProductById(productId);

    // productById$.subscribe(val => console.log(val));

    this.product$ = productById$;
  
  }

  loadRatingById(productId: any) {
    const ratingById$ = this.ratingsService.loadRatingsById(productId);

    // ratingById$.subscribe(val => console.log(productId, val));

    this.ratings$ = ratingById$;
    
  }
}
