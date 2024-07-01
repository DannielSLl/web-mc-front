import { LocalElegidoService } from './local-elegido.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.production';
import { Injectable } from '@angular/core';
import { PedidoDetalleDTO, PedidoDto } from '../model/pedido.dto';
import { CartService } from './cart.service';
import { CartItemsDto } from '../model/cartItems.dto';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersClientService {
  private URL = environment.ApiUrl + '/api/pedidos';

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private cartService: CartService,
    private localElegidoService: LocalElegidoService
  ) {}

  sendOrder(): Observable<PedidoDto> {
    let pedido: PedidoDto;
    let products: CartItemsDto[] = this.cartService.getProducts();
    let pedidoDetalle = this.convertToPedidoDetalleDto(products);
    let precioTotal = this.cartService.getPriceTotal();
    let userId = this.tokenService.getUserId();
    pedido = new PedidoDto(
      precioTotal,
      "Efectivo",
      pedidoDetalle,
      this.localElegidoService.getLocalElegido() ?? 1,
      userId
    );
    return this.http.post<PedidoDto>(this.URL, pedido);
  }

  convertToPedidoDetalleDto(products: CartItemsDto[]): PedidoDetalleDTO[] {
    let pedidoDetalle: PedidoDetalleDTO[] = [];
    products.forEach((product) => {
      let detalle: PedidoDetalleDTO = {
        cantidad: product.quantity,
        productoId: product.id,
      };
      pedidoDetalle.push(detalle);
    });
    return pedidoDetalle;
  }

}
