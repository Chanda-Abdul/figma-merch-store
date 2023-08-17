import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartDetails: any;

  private cartProducts = new BehaviorSubject([]);
  currentCartProducts = this.cartProducts.asObservable();

  private cartTotal = new BehaviorSubject(0);
  currentCartTotal = this.cartTotal.asObservable();

  private cartItemCount = new BehaviorSubject(0);
  currentCartItemCount = this.cartItemCount.asObservable();

  constructor() { }

  loadCart(): Observable<CartItem[]> | any {
    if (localStorage['cart_contents'] === undefined) {
      this.cartDetails = {
        cartItems: [],
        cartTotal: 0,
        cartItemCount: 0,
      };
    }

    else {
      this.cartDetails = JSON.parse(
        localStorage
          .getItem('cart_contents')!) as Cart || {};
    }

    this.saveCart()

    this.cartProducts.next(this.cartDetails.cartItems);

  }


  saveCart() {
    this.cartDetails.cartTotal = this.loadCartTotal();
    this.cartDetails.cartItemCount = this.loadCartCount();
    localStorage.setItem('cart_contents', JSON.stringify(this.cartDetails));

    this.cartDetails.cartTotal = this.loadCartTotal();
    this.cartDetails.cartItemCount = this.loadCartCount();
  }

  loadCartCount() {
    let itemCount = this.cartDetails
      .cartItems
      .reduce((acc: any, item: any) => {
        return acc += item.quantity;
      }, 0);

    this.cartDetails.cartItemCount = itemCount;

    this.cartItemCount.next(itemCount);

    return itemCount;
  }

  loadCartTotal() {
    let cartTotal = this.cartDetails
      .cartItems
      .reduce((acc: any, item: any) => {
        return acc += (item.price * item.quantity);
      }, 0)

    this.cartDetails.cartTotal = cartTotal;

    this.cartTotal.next(cartTotal);

    return cartTotal;
  }

  addItemToCart(addedProduct: any) {
    const itemInCartCheck = this.cartDetails.cartItems.findIndex((x: any) => x.id === addedProduct.id) > -1;
    const idxCheck = this.cartDetails.cartItems.findIndex((x: any) => x.id === addedProduct.id);
    const itemAndSizeInCartCheck = this.cartDetails.cartItems.findIndex((x: any) => x.id === addedProduct.id && x.variant === addedProduct.variant);

    if (!itemInCartCheck) {
      /* add item to cart if not already there */
      this.cartDetails.cartItems.push(addedProduct);
    }

    else if (itemInCartCheck && !addedProduct.hasOwnProperty('variant')) {
      /* item is in cart, no variant, overide with new quanity */
      this.cartDetails.cartItems[idxCheck].quantity = addedProduct.quantity;
    }

    else if (itemAndSizeInCartCheck > -1) {
      /* item with variant in cart, overide with new quanity */
      this.cartDetails.cartItems[itemAndSizeInCartCheck].quantity = addedProduct.quantity;
    }

    else {
      /* item is in cart but not size, add new item with size and quantity  */
      this.cartDetails.cartItems.push(addedProduct);
    }

    this.saveCart();
  }

  updateCartItem(increaseOrDecrease: string, product: any): any {
    const idx = this.cartDetails.cartItems.findIndex((x: any) => x.id === product.id && x.variant === product.variant);

    const productQuantity = this.cartDetails.cartItems[idx].quantity;

    if (increaseOrDecrease === 'increase') {
      this.cartDetails.cartItems[idx].quantity = productQuantity + 1;

    }
    if (increaseOrDecrease === 'decrease' && productQuantity > 1) {
      this.cartDetails.cartItems[idx].quantity = productQuantity - 1;

    }
    else {
      return null
    }
  }

  removeCartItem(product: any) {
    const idx = this.cartDetails.cartItems.findIndex((x: any) => x.id === product.id && x.variant === product.variant)

    if (idx > -1) {
      this.cartDetails.cartItems.splice(idx, 1);
      this.saveCart();
    }
  }

  emptyCart() {
    localStorage.clear();
    this.loadCart();
  }
}
