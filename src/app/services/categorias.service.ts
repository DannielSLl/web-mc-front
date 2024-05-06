import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDto } from '../model/categoria.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private httpClient: HttpClient) {}

  URL = 'https://deploy-to-mc-b52be698938f.herokuapp.com/api/categoria';

  public getAllCategorias(): Observable<CategoriaDto[]> {
    return this.httpClient.get<CategoriaDto[]>(this.URL);
  }
}
