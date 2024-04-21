import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  public registerForm!: FormGroup;
  public isLoading!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this.service.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.message.success('Cuenta creada!', {
            nzDuration: 3000
          });
          this.router.navigate([`/login`]);
        },
        error: (error) => {
          this.message.error('Error al crear cuenta', {
            nzDuration: 5000
          });
          console.log(error)
        }
      });
    }
  }

}
