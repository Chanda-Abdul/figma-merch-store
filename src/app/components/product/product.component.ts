import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,  map } from 'rxjs';
import { SIZES } from 'server/db-data';
import { Product } from 'src/app/model/product.model';
import { Review } from 'src/app/model/review.model';
import { Size } from 'src/app/model/sizeGuide.model';
import { ProductsService } from 'src/app/services/products.service';
import { RatingsService } from 'src/app/services/ratings.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$!: Observable<Product>;

  reviews$!: Observable<Review[]>;
  imgIdx: number = 0;
  averageRating: number = 0;
  averageRatingStars: string = Array(5).fill(`<span>&#9734;</span>`).join(``);

  sizes: Size[] = SIZES;
  showChart = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private ratingsService: RatingsService,
    private renderer: Renderer2) { }
    
   

  ngOnInit() {
    this.scrollToTop();
  
    const productId: number = Number(this.route.snapshot.paramMap.get('productId'));

    this.loadProductById(productId);

    this.loadRatingById(productId);
  }


  scrollToTop() {
    const target = document.documentElement ;
  
    this.renderer.setProperty(target, 'scrollTop', 0);
  }

  
  expandImg(idx: number) {
    this.imgIdx = idx;
  }

  loadProductById(productId: any) {
    const productById$ = this.productsService.loadProductById(productId);

    this.product$ = productById$;
  }

  loadRatingById(productId: any) {
    const reviewById$ = this.ratingsService.loadRatingsById(productId);

    reviewById$.pipe(
      map(ratings => {
        let average = 0;

        ratings.forEach(rating => { average += rating.rating });

        average /= ratings.length;

        this.averageRating = average;

        average = Math.round(average);

        this.averageRatingStars = Array(average).fill(`<span>&#9733;</span>`).concat(Array(5 - average).fill(`<span>&#9734;</span>`)).join(``)
      })
    ).subscribe();

    this.reviews$ = reviewById$;

  }
}
