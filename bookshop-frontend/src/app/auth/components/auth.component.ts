import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  email:string = "";
  password:string = "";

    constructor(private router:Router, private authServ:AuthService){}

    login(){
      this.authServ.login(this.email, this.password).subscribe((res:any) =>{
        if(res.token){
          sessionStorage.setItem('token', res.token)
          this.router.navigate(['books/list'])
        }
      },
      (error) => console.error("error al hace login"+error))
    }
}
