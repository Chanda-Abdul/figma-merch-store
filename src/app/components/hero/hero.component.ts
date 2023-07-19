import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

import { gsap } from 'gsap';
import {Draggable} from "gsap/Draggable";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  featuredProducts$!: Observable<Product[]>;
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
 
  proxyElement!: HTMLDivElement;
  // Maybe use for featureProducts Content Projection
  // @ContentChildren('HomeComponent', {read: ElementRef}) images: QueryList<HomeImageComponent>;
  // with ngAfterViewInit(){
  // }

  draggable!: Draggable;

  constructor(private productsService: ProductsService, 
    @Inject(DOCUMENT) private _document: Document) {
    this.proxyElement = this._document.createElement('div')
  }

  ngOnInit(): void {
  this.featuredProducts$ = this.productsService.loadFeaturedProducts()

  gsap.registerPlugin(Draggable);
  
    
}
  ngAfterViewInit(): void {
    console.log(this.featuredProducts$)
    this.draggable = new Draggable(this.proxyElement, {
    type: 'x',
    edgeResistance: 0.5,
    snap: (val) => Math.round(val / 100) * 100,
    inertia: true,
    allowContextMenu : true,	
    dragClickables: true,
    onThrowComplete	: function() { console.log(this) },
    bounds: {
      minX: -this.proxyElement.offsetWidth + this.containerRef.nativeElement.offsetWidth,
      maxX: 0
  }}
  )
  console.log(this.draggable)
  }
}
