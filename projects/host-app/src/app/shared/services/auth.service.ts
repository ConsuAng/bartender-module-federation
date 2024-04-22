import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(sessionStorage.getItem('token'));

  getTokenObservable() {
    return this.tokenSubject.asObservable();
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }
  clearToken() {
    sessionStorage.removeItem('token');
    this.tokenSubject.next(null);
  }
}