import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CocktailService {
  constructor(
    private http:HttpClient
  ) {}

  public getDetail(id: string): Observable<any> {
    return this.http.get(` http://localhost:8081//cocktail/detail?id=${id}`);
  }

}