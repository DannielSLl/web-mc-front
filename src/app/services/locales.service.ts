import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Local } from '../model/local.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private URL = environment.ApiUrl + '/api/local/';
  
  constructor(private httpCliente: HttpClient) {}
  
  public getLocales(): Observable<Local[]> {
    return this.httpCliente.get<Local[]>(this.URL);
  }

  public getLocalById(id : number) : Observable<Local> {
    return this.httpCliente.get<Local>(this.URL + id);

  }
}
