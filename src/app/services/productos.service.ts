import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriaDto } from '../model/categoria.dto';
import { __values } from 'tslib';
import { ProductoDto } from '../model/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productosList: ProductoDto[] = [];

  private productosSubject = new BehaviorSubject<any>([]);
  productos$ = this.productosSubject.asObservable();

  URL = 'http://localhost:3000/api/products/';

  constructor(private httpCliente: HttpClient) {}

  getProductos(): void {
    // Realiza la solicitud HTTP GET y suscríbete al resultado
    this.httpCliente.get<any>(this.URL).subscribe((productos) => {
      // Cuando se obtengan los productos, actualiza el BehaviorSubject
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
