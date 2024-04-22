import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../../../host-app/src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isLoading!: boolean;
  public loginData = {
    email: '',
    password: ''
  };

  constructor(
    private service: LoginService,
    private router: Router,
    private message: NzMessageService,
    private authService: AuthService
  ) { }

  public onSubmit() {
    this.isLoading = true;
    this.service.login(this.loginData).subscribe({
      next: (response) => {
        //sessionStorage.setItem('token', response.token);
        this.authService.setToken(response.token);
        this.isLoading = false;
        this.router.navigate([`/profile`]);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.message.error('Email o contraseña incorrecta', {
          nzDuration: 5000
        });
      }
    });

  }

  public onclick(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 3000
    });
  }
}
