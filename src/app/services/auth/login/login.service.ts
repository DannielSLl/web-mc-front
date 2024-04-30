import { Injectable } from '@angular/core';
import { LoginUserDto } from '../../../model/login-user.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenDto } from '../../../model/token.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  URL = 'https://localhost:3000/api';

  public login(dto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.URL + '/login', dto);
  }
}
