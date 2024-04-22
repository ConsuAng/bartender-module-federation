import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy{
  public token!: string | null;
  private tokenSubscription!: Subscription;
  
  constructor(
    private router: Router,   
    private authService: AuthService 
  ){}

  ngOnInit(): void {
    this.authService.getTokenObservable().subscribe(token => {
      this.token = token;
    });
  }

  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
  }

  public logOut(): void {
    this.authService.clearToken();
    this.router.navigate([""]);
  }
}
