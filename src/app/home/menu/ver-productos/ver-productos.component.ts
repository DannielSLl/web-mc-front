import { ProductoDto } from './../../../model/product.dto';
import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from '../ver-productos/item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { IProducto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ItemProductosComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css',
})
export class VerProductosComponent{
  productosList: ProductoDto[] = [
    {
      "id": 1,
      "nombre": "CUARTO DE LIBRA",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger-thumbnail.png",
      "categoria": 1
    },
    {
      "id": 2,
      "nombre": "HELADOS",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://w7.pngwing.com/pngs/634/470/png-transparent-ice-cream-cones-gary-s-ice-cream-ice-cream-cake-ice-cream.png",
      "categoria": 1
    },
    {
      "id": 3,
      "nombre": "BEBIDA 1",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://c0.klipartz.com/pngpicture/496/118/gratis-png-vaso-con-refrescos-coca-cola-bebidas-gaseosas-dieta-coque-pepsi-coca.png",
      "categoria": 3
    },

  ];

  constructor(private productoService: ProductosService) {}

  // ngOnInit(): void {
  //   this.productoService.getProductos();
  //   this.productoService.productos$.subscribe((productos) => {
  //     this.productosList = productos;
  //   });
  // }
}
