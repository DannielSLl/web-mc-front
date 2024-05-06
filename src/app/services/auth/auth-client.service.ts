import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserDto } from '../../model/login-user.dto';
import { Observable } from 'rxjs';
import { JwtTokenDto } from '../../model/token.dto';
import { RegisterUserDto } from '../../model/register-user-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthClientService {
  constructor(private httpClient: HttpClient) {}

  URL = environment.ApiUrl + '/api/auth';

  public login(dto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.URL + '/signin', dto);
  }
  public register(dto: RegisterUserDto): Observable<any> {
    return this.httpClient.post<any>(URL + '/signup', dto);
  }
}
