import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { IFavoriteCocktail } from '../models/favorite-cocktail.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  public userCocktails!: IFavoriteCocktail[];
  public user!:any;
  public token!: string | null;
  public isLoading!: boolean; 
  public href: string ="detail/" 
 
  constructor(
    private service: ProfileService,
    private message: NzMessageService,
    private router: Router,    
  ) {}
  
  public ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.userProfile(String(this.token));
    this.getCocktails(String(this.token));
  }

  public userProfile(token: string): void {
    this.service.getUser(token).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public getCocktails(token: string): void {
    this.isLoading = true;
    this.service.userCocktails(token).subscribe({
      next: (response) => {
        this.userCocktails = response;
        this.isLoading = false;
      },
      error:(error) => {
        this.isLoading = false;
        console.log(error);
      }
    });
  }

  public removeCocktail(id: string):void {
    this.service.removeFavCocktail(String(this.token), id).subscribe({
      next:(response) => {
        this.message.success('Cocktail eliminado de favoritos con éxito', {
          nzDuration: 3000
        });
        this.getCocktails(String(this.token));
      },
      error: (error) => {
        this.message.error('Ocurrio un error, intentalo más tarde', {
          nzDuration: 3000
        });
      }
    });
  }

  public goDetail(id: string): void {
    this.router.navigate([`/cocktails/detail/${id}`]);
  }
}
