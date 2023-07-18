import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartCount = 1;
  items = [
    { name: 'Shape up tee', price: 20, quantity: 4, img: 'https://store.figma.com/cdn/shop/products/figma-store_shape-up-tee_013_1000x.png?v=1678114580' },
    { name: 'Gridlock washi tape', price: 1, quantity: 4, img: 'https://store.figma.com/cdn/shop/products/figma-store_washi-tape-green_01_1000x.jpg?v=1670520424' }]
  cartTotal = 0;
}
