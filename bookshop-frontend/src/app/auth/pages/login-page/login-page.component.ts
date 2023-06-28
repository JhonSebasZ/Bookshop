import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private authServ: AuthService, private router: Router) {}

  login(formLogin: any) {
    this.authServ
      .login(formLogin.value.email, formLogin.value.password)
      .subscribe({
        next: (res: any) => {
          if (res.token) {
            sessionStorage.setItem('token', res.token);
            this.router.navigate(['books/list']);
          }
        },
        error: (error) => console.error('error al hacer login' + error)
      });
  }
}
