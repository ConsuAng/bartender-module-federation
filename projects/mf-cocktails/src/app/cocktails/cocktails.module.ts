import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../components/search/search.component';
import { SearchService } from '../services/search.service';
import { DetailComponent } from '../components/detail/detail.component';
import { CocktailService } from '../services/cocktail.service';


@NgModule({
  declarations: [
    CocktailsComponent,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[
    SearchService,
    CocktailService,
    
  ]
})
export class CocktailsModule { }
