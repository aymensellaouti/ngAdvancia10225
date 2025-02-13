import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONST } from 'src/app/config/app-const.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap(response => {
        this.setToken(response.id);
      }
    ));
  }

  setToken(token: string) {
    localStorage.setItem(APP_CONST.tokenName, token);
  }

  removeToken(): void {
    localStorage.removeItem(APP_CONST.tokenName);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenName) ?? '';
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    this.removeToken();
  }
}
