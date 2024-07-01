// local.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '../model/local.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = environment.ApiUrl + '/api/local';
  constructor(private http: HttpClient) { }

  // Obtener todos los locales
  getLocales(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }

  // Crear un nuevo local
  createLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(this.apiUrl, local);
  }

  // Actualizar un local existente
  updateLocal(local: Local): Observable<Local> {
    const url = `${this.apiUrl}/${local.id}`;
    return this.http.put<Local>(url, local);
  }

  // Eliminar un local
  deleteLocal(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
