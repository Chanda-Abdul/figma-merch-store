import { Component, OnInit } from '@angular/core';
import { callToAction } from './cta.data';
import { ProductsService } from 'src/app/services/products.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit{
  words = callToAction;

  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void {
    
  }
  filterProducts(filterTo: string){
    this.productsService.filterProducts(filterTo);
  }
}
