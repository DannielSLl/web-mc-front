import { OrdersClientService } from './../../../services/orders-client.service';
import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output, OnInit } from '@angular/core';
import { CartItemsDto } from '../../../model/cartItems.dto';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Output() viewChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  products: CartItemsDto[] = [];

  cartVisibility = true;


  constructor(private cartService: CartService,
    private ordersClientService: OrdersClientService
  ) {}

  ngOnInit(): void {
    this.cartService.products$.subscribe((products) => {
      this.products = products;
    });
  }


  updateCart(): void {
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  sendPedido() {
    this.ordersClientService.sendOrder().subscribe({
      next: (data) => {
        alert('Pedido enviado');
        this.Close();
        console.log(data);
      },
      error: (error) => {
        alert('Error al enviar pedido');
      },
  });
  }
  Close() {
    this.viewChange.emit(false);
  }
}
