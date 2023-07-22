import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  productList!: any;
  cartCount = 0;
  cartTotal = 0;

  constructor(private cartService: CartService) { }
 
  ngOnInit(): void {
    this.loadCart();
    //TO-DO => ngOnChanges
  }

  ngOnDestroy(): void {
    // this.updateAndSaveCart()
  }

  loadCart() {
    // TO-DO (funtionality) => add loader
    this.productList = this.cartService.loadCart();

    this.updateTotalAndQuanity();
  }

  updateQuantity(increaseOrDecrease: string, id: number) {

    if (increaseOrDecrease === 'increase') {
      //should be in cart
      // this.cartService.checkCartForProduct(id);
      this.cartService.updateCartItem('increase', id)
 
    }
    if (increaseOrDecrease === 'decrease' ) {
      // this.cartService.checkCartForProduct(id);
      this.cartService.updateCartItem('decrease', id)
    }
  }

  updateTotalAndQuanity() {
    this.cartCount = this.cartService.loadCartCount();

    this.cartTotal = this.cartService.loadCartTotal();
  }


  removeItem(id: number) {
    this.cartService.removeCartItem(id)
  }

  updateAndSaveCart() {
    this.cartService.saveCart();
  }

  emptyCart() {
    this.cartService.emptyCart();
  }
}
