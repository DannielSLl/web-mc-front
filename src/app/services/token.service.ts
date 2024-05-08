import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLogged());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  public setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public logOut(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    return this.getToken() != null;
  }

  public setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
}
