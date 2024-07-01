import { ProductService } from './../../../services/product.service';
import { CartItemsDto } from './../../../model/cartItems.dto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoDto } from '../../../model/product.dto';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-pruducto-detalles',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css',
})
export class PruductoDetallesComponent implements OnInit {
  @Input()
  producto: ProductoDto = {
    id: 0,
    nombre: '',
    description: '',
    precio: 0,
    calorias: 0,
    img: '',
    categoria: {
      id: 0,
      nombre: '',
      url: '',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = +params.get('id')!;

      if (productId) {
        this.obtenerProductoPorId(productId);
      }
    });
  }

  obtenerProductoPorId(productId: number): void {
    this.productService.getProductById(productId).subscribe((producto) => {
      if (producto) {
        this.producto = producto;
      } else {
        console.log(producto);
      }
    });
  }
  addToCart(product: ProductoDto) {
    const cartItem: CartItemsDto = new CartItemsDto(
      product.id,
      product.nombre,
      product.precio,
      1
    );
    this.cartService.addToCart(cartItem);
  }
}
