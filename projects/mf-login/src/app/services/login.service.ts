import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
  constructor(
    private http:HttpClient
  ) {}

  public login(payload: any): Observable<any> {
    return this.http.post(` http://localhost:8080/login`, payload);
  }

  public register(payload: any): Observable<any> {
    return this.http.post(` http://localhost:8080/register`, payload);
  }

}