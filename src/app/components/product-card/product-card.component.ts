import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
@Input() product!: Product;

selectedCountry: string = 'store-jp'
}
