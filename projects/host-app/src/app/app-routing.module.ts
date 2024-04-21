import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/token.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    loadChildren: () => import('mfLogin/LoginModule').then((m) => m.LoginModule),
  },
  {
    path:'mf-home',
    loadChildren: () => import('mfHome/ShowInfoModule').then((m) => m.ShowInfoModule),
    canActivate:[AuthGuard]
  },
  {
    path:'cocktails',
    loadChildren: () => import('mfCocktails/CocktailsModule').then((m) => m.CocktailsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('mfUser/ProfileModule').then((m) => m.ProfileModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
