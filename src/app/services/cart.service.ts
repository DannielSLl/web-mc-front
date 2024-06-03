import { Product } from './../model/order-detail.dto';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemsDto } from '../model/cartItems.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productSubject = new BehaviorSubject<CartItemsDto[]>([]);
  products$ = this.productSubject.asObservable();

  constructor() { }

  getProducts(): CartItemsDto[] {
    return this.productSubject.getValue();
  }

  public addToCart(product: CartItemsDto): void {
    let products = this.productSubject.getValue();
    let productIndex = products.findIndex((p) => p.id === product.id);
    if (productIndex !== -1) {
      products[productIndex].quantity += product.quantity;
    } else {
      products.push(product);
    }
    this.productSubject.next(products);
  }

  public removeFromCart(productId: number): void {
    let products = this.productSubject.getValue();
    let productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
    }
    this.productSubject.next(products);
  }

  getPriceTotal(): number {
    let products = this.productSubject.getValue();
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
