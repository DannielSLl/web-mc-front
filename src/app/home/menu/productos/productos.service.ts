import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from './productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_ULR: string = `https://mcdonald.free.beeceptor.com/productos`
  constructor( private httpCliente: HttpClient) { }

  getProductos(): Observable<any>{
    return this.httpCliente.get(this.API_ULR).pipe(res => res)
  }
}
