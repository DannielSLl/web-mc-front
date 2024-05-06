import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDto } from '../model/categoria.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private httpClient: HttpClient) {}

  URL = process.env['ApiUrl'] + '/api/categoria';

  public getAllCategorias(): Observable<CategoriaDto[]> {
    return this.httpClient.get<CategoriaDto[]>(this.URL);
  }
}
