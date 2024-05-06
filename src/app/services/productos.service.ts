import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import { ProductoDto } from '../model/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productosList: ProductoDto[] = [];

  private productosSubject = new BehaviorSubject<any>([]);
  productos$ = this.productosSubject.asObservable();

  URL = process.env['ApiUrl'] + '/api/products/';

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
