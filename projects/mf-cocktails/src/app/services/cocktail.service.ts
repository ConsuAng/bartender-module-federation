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
export class CocktailService {
  constructor(
    private http:HttpClient
  ) {}

  public getDetail(id: string): Observable<any> {
    return this.http.get(` http://localhost:8081//cocktail/detail?id=${id}`);
  }

  public saveCocktail(token: string, id: string, name: string, image: string): Observable<any> {
    const userId = this.getUserId(token);
    const payload = {
      user_id: userId,
      cocktail_id: id,
      cocktail_name: name,
      cocktail_image: image
    }
    return this.http.post(` http://localhost:8081/cocktail`,payload);
  }

  public getUserFav(token: string): Observable<any> {
    const userId = this.getUserId(token);
    return this.http.get(` http://localhost:8081//cocktail/user?user=${userId}`);
  }

  public getUserId(token:string){
    const decoded: JWTToken = jwt_decode(token);
      return Number(decoded.user_id);
  }

}
