import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';
import { ProductoDto } from '../model/product.dto';
import { environment } from '../../environments/environment.development';
import { CreateProductDto } from '../model/create-product.dto';
import { LocalProducto } from '../model/local-productos.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = environment.ApiUrl + '/api/products/';

  constructor(private httpCliente: HttpClient) {}

  public getProducts(): Observable<ProductoDto[]> {
    return this.httpCliente.get<ProductoDto[]>(this.URL);
  }

  public getProductById(id: number): Observable<ProductoDto> {
    return this.httpCliente.get<ProductoDto>(this.URL + id);
  }

  public getProductByCategoria(id: number): Observable<ProductoDto[]> {
    return this.httpCliente.get<ProductoDto[]>(this.URL + 'categoria/' + id);
  }

  public createProduct(product: CreateProductDto): Observable<any> {
    return this.httpCliente.post<any>(this.URL, product);
  }

  public updateProduct(
    id: number,
    product: ProductoDto
  ): Observable<ProductoDto> {
    console.log(product);
    return this.httpCliente.put<ProductoDto>(this.URL + id, product);
  }

  public getProductByLocal(id: number): Observable<LocalProducto[]> {
    return this.httpCliente.get<LocalProducto[]>(this.URL + 'local/' + id);
  }

  public deleteProduct(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.URL + id);
  }
}
