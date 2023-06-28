import { Component, OnInit } from '@angular/core';
import { Ibook } from '../../models/ibook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-book-page',
  templateUrl: './detail-book-page.component.html',
  styleUrls: ['./detail-book-page.component.css']
})

export class DetailBookPageComponent implements OnInit{

  // id:any | undefined;

  selectedBook:Ibook = {
    id:0,
    title:"",
    price:0,
    description:"",
    category:"",
    isbn:"",
    pages:"",
    publication_date:"",
    image:""
  }

  author :any={
    name:"",
    lastname:""
  }

  page:number = 0;

  constructor(private router:Router){}

  ngOnInit(): void {
    //resibir info a travez de params
    // this.router.params.subscribe((params:any)=>{
    //   if(params.id){
    //     this.id = params.id
    //   }
    // })

    //lectura del estado de navegacion
    console.log(history.state)
    if(history.state.data){
      this.selectedBook = history.state.data
      this.author.name=history.state.data.author.name
      this.author.lastname=history.state.data.author.lastname
    }

    if(history.state.page){
      this.page = history.state.page
    }
  }

  goBack(){
    this.router.navigate(['books/list'], {queryParams:{page:this.page}})
  }

  

}
