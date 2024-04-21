import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails.component';
import { DetailComponent } from '../components/detail/detail.component';

const routes: Routes = [
  {
    path:'',
    component: CocktailsComponent
  },
  {
    path:'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule { }
