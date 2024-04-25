import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  API_URL: string = "https://miproyecto.free.beeceptor.com/productos";
  constructor( private httpCliente: HttpClient) { }

  getProductos(): Observable<any>{
    return this.httpCliente.get(this.API_URL).pipe(res => res);
  }
}
