import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent {
  public search: string = "";
  public searchTimeout: any;
  public isLoading!: boolean;
  public data!:[];

  constructor(
    private searchService: SearchService
  ) {}

  public searchTerm(params: HttpParams): void {
    this.isLoading = true;
    this.searchService.search(params).subscribe({
      next: (response: any) =>{
        this.data = response;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log(error.status);
        this.isLoading = false;
      }
    });
  }

  public setQueryParams(text?: string): HttpParams {
    const queryFilter : { [key: string]: string | number | boolean } = {
      search: text || ''
    };
    Object.keys(queryFilter).forEach(key => !!queryFilter[key] ? '' : delete queryFilter[key]);
    return new HttpParams({ fromObject: queryFilter });
  }

  public searchInBase(value: string): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.searchTerm(this.setQueryParams(value));
    }, 200);
  }
}
