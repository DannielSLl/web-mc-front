import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import { ProductoDto } from '../model/product.dto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productosList: ProductoDto[] = [
    {
      "id": 1,
      "nombre": "HAMBURGESA 1",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger-thumbnail.png",
      "categoria": 1
    },
    {
      "id": 2,
      "nombre": "HAMBURGESA 2",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger-thumbnail.png",
      "categoria": 1
    },
    {
      "id": 3,
      "nombre": "HELADOS",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://w7.pngwing.com/pngs/634/470/png-transparent-ice-cream-cones-gary-s-ice-cream-ice-cream-cake-ice-cream.png",
      "categoria": 2
    },
    {
      "id": 4,
      "nombre": "BEBIDA 1",
      "descripcion": "diabetes",
      "precio": 13000,
      "calorias": 1000,
      "img": "https://c0.klipartz.com/pngpicture/496/118/gratis-png-vaso-con-refrescos-coca-cola-bebidas-gaseosas-dieta-coque-pepsi-coca.png",
      "categoria": 3
    },
  ];

  private productosSubject = new BehaviorSubject<any>([]);
  productos$ = this.productosSubject.asObservable();

  URL = environment.ApiUrl + '/api/products/';

  constructor(private httpCliente: HttpClient) {}

  getProductos(): void {
    this.httpCliente.get<any>(this.URL).subscribe((productos) => {
      this.productosSubject.next(productos);
      this.productosList = productos;
    });
  }
  FilterProductoByCategoria(id: number): void {
    const productos = this.productosList.filter(
      (producto) => producto.categoria === id
    );
    this.productosSubject.next(productos);
  }
}
