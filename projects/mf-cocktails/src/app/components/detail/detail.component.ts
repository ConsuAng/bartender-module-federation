import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { ICocktail } from '../../model/cocktail.interface';
import { IFavoriteCocktail } from '../../model/favorite-cocktail.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  public cocktailId: string = "";
  public cocktail!: ICocktail;
  public isLoading!: boolean;
  public isFav!: boolean;
  public token!: string | null;

  constructor(
    private route: ActivatedRoute,
    private service: CocktailService,
    private router: Router,    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktailId = params['id'];
    });
    this.token = sessionStorage.getItem('token');
    this.getCocktail(this.cocktailId);
    this.getFavorites();
  }

  public getCocktail(id: string): void {
    this.isLoading = true;
    this.service.getDetail(id).subscribe({
      next: (response) => {
        this.cocktail = response[0];
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

  public getFavorites(): void {
    this.service.getUserFav(String(this.token)).subscribe({
      next: (response)=> {
        const fav = response.filter((x: IFavoriteCocktail) => x.cocktail_id === this.cocktailId);
        if(fav.length >= 1) {
          this.isFav = true;
        } else {
          this.isFav = false;
        }
      },
      error:(error) => {
        console.log(error);
      }
    });
  }

  public addFav(): void {
    this.isLoading = true;
    this.service.saveCocktail(String(this.token),this.cocktail.idDrink, this.cocktail.strDrink, this.cocktail.strDrinkThumb).subscribe({
      next: (response) => {
        this.getCocktail(this.cocktailId);
        this.getFavorites();
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  public removeFav(): void {
    this.isLoading = true;
    this.service.removeFavCocktail(String(this.token),this.cocktail.idDrink).subscribe({
      next: (response) => {
        this.getCocktail(this.cocktailId);
        this.getFavorites();
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  public goBack(): void {
    this.router.navigate(["/cocktails"]);
  }

}
