import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import jwt_decode from 'jwt-decode';


interface JWTToken {
  authorized: boolean;
  exp: number;
  user_id: number;
}

@Injectable()
export class ProfileService {
  constructor(
    private http: HttpClient
  ) {}

  public getUser(token: string): Observable<any> {
    const userId = this.getUserId(token);
    return this.http.get(`http://localhost:8080/user?user_id=${userId}`);
  }

  public userCocktails(token:string): Observable<any> {
    const userId = this.getUserId(token);
    return this.http.get(`http://localhost:8081/cocktails/user?user=${userId}`);
  }

  public removeFavCocktail(token: string, cocktailId: string): Observable<any> {
    const userId = this.getUserId(token);
    return this.http.delete(` http://localhost:8081/cocktails/${cocktailId}/user/${userId}`);
  }

  public getUserId(token:string){
    const decoded: JWTToken = jwt_decode(token);
      return Number(decoded.user_id);
  }
}