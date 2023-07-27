import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //TO-DO => move? should be stateless observable
  public cartContentsList: any = [];

  constructor(private http: HttpClient) { }

  loadCartCount() {
    this.loadCart();
    return this.cartContentsList.reduce((acc: any, item: any) => {
      return acc += item.quantity;
    }, 0);
  }


  loadCartTotal() {
    return this.cartContentsList.reduce((acc: any, item: any) => {
      return acc += (item.price * item.quantity);
    }, 0);
  }

  loadCart(): Observable<CartItem[]> | any {
    this.cartContentsList = JSON.parse(localStorage.getItem('cart_contents')!) as CartItem[] || [];
    return this.cartContentsList;

    // return this.http.get<any>("/api/cart").pipe(
    //     map(res => res.payload),
    //     tap(val => console.log(val)),
    //     shareReplay()
    //   );


    // if (JSON.parse(localStorage['cart_contents']).length === 0) {
    // // TO-Do => delete later  - for testing
    //   // localStorage.setItem('cart_contents', JSON.stringify([
    //   //   { id: 39, productName: 'Shape up tee', price: 20, quantity: 4, productImg: 'https://store.figma.com/cdn/shop/products/figma-store_shape-up-tee_013_1000x.png?v=1678114580' },
    //   //   { id: 44, productName: 'Gridlock washi tape', price: 1, quantity: 4, productImg: 'https://store.figma.com/cdn/shop/products/figma-store_washi-tape-green_01_1000x.jpg?v=1670520424' }]

    //   // ))
    // }

  }

  addItemToCart(addedProduct: any) {

    if (!this.checkCartForProduct(addedProduct.id)) {
      this.cartContentsList.push(addedProduct);
    }
    else {
      const idx = this.cartContentsList.findIndex((x: any) => x.id === addedProduct.id);

      let productToUpdate = this.cartContentsList[idx];

      productToUpdate.quantity += addedProduct.quantity;
      this.cartContentsList[idx] = productToUpdate;

    }
    this.saveCart();

  }

  updateCartItem(increaseOrDecrease: string, id: number): any {
    const idx = this.cartContentsList.findIndex((x: any) => x.id === id);

    let productToUpdate = this.cartContentsList[idx]

    if (increaseOrDecrease === 'increase') {
      productToUpdate.quantity++;
      this.cartContentsList[idx] = productToUpdate;
    }
    if (increaseOrDecrease === 'decrease' && productToUpdate.quantity > 1) {
      productToUpdate.quantity--;
      this.cartContentsList[idx] = productToUpdate;
    }
    else {
      return null
      // TO-DO => add error message 
    }
    //and update UI

  }

  checkCartForProduct(id: number) {
    const itemInCart = this.cartContentsList.findIndex((x: any) => x.id === id) > -1;

    return itemInCart
  }

  removeCartItem(productId: any) {
    const indx = this.cartContentsList.findIndex((x: any) => x.id === productId);

    if (indx > -1) {
      this.cartContentsList.splice(indx, 1);
      this.saveCart();
    }
  }




  saveCart() {
    localStorage.setItem('cart_contents', JSON.stringify(this.cartContentsList))

  }

  emptyCart() {
    localStorage.clear()
  }
}
