import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDto } from '../model/categoria.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private httpClient: HttpClient) {}

  URL = environment.ApiUrl + '/api/categoria';

  public getAllCategorias(): Observable<CategoriaDto[]> {
    return this.httpClient.get<CategoriaDto[]>(this.URL);
  }
}
