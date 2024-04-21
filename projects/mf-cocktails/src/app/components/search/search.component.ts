import { Component, Input } from '@angular/core';
import { ICocktail } from '../../model/cocktail.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() data:ICocktail[] = [];
  public href: string ="detail/" 

}
