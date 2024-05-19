import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDto } from '../model/categoria.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {


  private URL = environment.ApiUrl + '/api/categoria';

  constructor(private httpClient: HttpClient) {}

  public getAllCategorias(): Observable<CategoriaDto[]> {
    return this.httpClient.get<CategoriaDto[]>(this.URL);
  }
}
