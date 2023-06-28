import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Ibook } from '../../models/ibook';
import { ActivatedRoute} from '@angular/router';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges{

  constructor(private routerAct:ActivatedRoute, private eventServ: EventService,){}

  update: EventEmitter<any> = new EventEmitter<any>();

  page:number = 0;

  ngOnInit(): void {
    this.routerAct.queryParams.subscribe((param:any) => {
      this.page = param.page
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.routerAct.queryParams.subscribe((param:any) => {
      this.page = param.page
    })
  }

  @Input() book:Ibook={
    id:0,
    title:"",
    price:0,
    description:"",
    category:"",
    isbn:"",
    pages:"",
    publication_date:"",
    image:""
  };

  @Output() delete:EventEmitter<Ibook> = new EventEmitter<Ibook>

  onEdit(book:any){
    this.eventServ.update.emit(book);
  }

  onDelete(book:any){
    this.delete.emit(book);
  }


}
