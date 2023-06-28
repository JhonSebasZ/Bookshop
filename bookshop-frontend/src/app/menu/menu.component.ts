import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  token:String | null = null;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logaut(){
    sessionStorage.removeItem('token');
    this.router.navigate(['auth'])
  }
  
}
