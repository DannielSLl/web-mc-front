import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { OrderListDto } from '../model/order-list.dto';
import { Observable } from 'rxjs';
import { OrderDetailDto } from '../model/order-detail.dto';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private URL = environment.ApiUrl + '/api/';

  constructor(private httpClient: HttpClient) { }

  public getAllOrders(): Observable<OrderListDto[]>{
    return this.httpClient.get<OrderListDto[]>(this.URL + 'pedidos');
  }

  getOrderDetail(id: number): Observable<OrderDetailDto> {
    return this.httpClient.get<OrderDetailDto>(this.URL + 'pedidos/' + id);
  }

  public markAsCompleted(id: number) {
    return this.httpClient.put(this.URL + 'pedidos/' + id, {});
  }

}
