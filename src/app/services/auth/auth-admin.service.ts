import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenDto } from '../../model/token.dto';
import { LoginUserDto } from '../../model/login-user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private httpClient: HttpClient) {}

  URL = environment.ApiUrl + '/api/auth/admin';

  public login(dto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.URL + '/signin', dto);
  }
}
