import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

gsap.registerPlugin(Draggable);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  featuredProducts$!: Observable<Product[]>;

  @ViewChild('draggableContent', { static: true }) draggableContent!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  // Maybe use for featureProducts Content Projection 
  // @ContentChildren('HomeComponent', {read: ElementRef}) images: QueryList<HomeImageComponent>;
  // with ngAfterViewInit(){
  // }
  
  contentLength!: number;
  draggable!: Draggable;
 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {


    this.loadFeaturedProducts();
    this.draggable = new Draggable(this.draggableContent.nativeElement, {
      type: 'x',
      bounds: this.container.nativeElement,
      onDrag: () => { }
    })

  }

  loadFeaturedProducts() {
    const products$ = this.productsService.loadAllProducts();

    // TO-DO =>  (functionality) change to custom currency pipe
    this.featuredProducts$ = products$
      .pipe(
        map(products =>
          products
            .filter(product => { return product.featured == true })
        ),
      );

    this.featuredProducts$.subscribe(val => console.log(val));
    // this.dragImages()  ;
  }

  // dragImages(){
  //   // console.log(this.draggableContent, Draggable);
  //   this.drag = new Draggable(this.draggableContent.nativeElement, {
  //     type:"x",
  //     // bounds: this.container.nativeElement,
  //     inertia: true,
  //     onClick: function() {
  //         console.log("clicked");
  //     },
  //     onDragEnd: function() {
  //         console.log("drag ended");
  //     }
  // });
  //   // this.drag = new Draggable(this.draggableContent.nativeElement, {
  //   //   type: 'x',
  //   //   onDragStart: () => {
  //   //     let cloneThumbnails =	this.featuredProducts$.subscribe()


  //   //   }
  //   // })
  // }
}
