import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  token:String | null = null;


  ngOnInit(): void {
    //Comprobar si exiete el token en el sesionStore
    this.token = sessionStorage.getItem('token')
  }

}
