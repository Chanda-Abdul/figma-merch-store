import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  products = products;
  constructor() { }
  ngOnInit() { console.log(products); }

}
