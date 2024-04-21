import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SearchService {
  constructor(
    private http:HttpClient
  ) {}

  public search(params: HttpParams): Observable<any> {
    const query = params ? `?${params.toString()}` : '';
    return this.http.get(` http://localhost:8081/cocktail${query}`);
  }

}