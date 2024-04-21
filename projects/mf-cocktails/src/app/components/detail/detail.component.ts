import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { ICocktail } from '../../model/cocktail.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  public cocktailId: string = "";
  public cocktail!: ICocktail;

  constructor(
    private route: ActivatedRoute,
    private service: CocktailService
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktailId = params['id'];
    });
    this.getCocktail(this.cocktailId);
  }

  public getCocktail(id: string): void {
    this.service.getDetail(id).subscribe({
      next: (response) => {
        console.log(response[0]);
        this.cocktail = response[0];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
