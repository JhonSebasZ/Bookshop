import { EventService } from './../../services/event.service';
import { Ibook } from './../../models/ibook';
import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Iauthor } from 'src/app/authors/models/iauthor';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit{

  constructor(private bookServ: BookService, private eventServ:EventService) {}

  // Declarar el formulario
  form: FormGroup = new FormGroup({});

  //datos del los autores
  authors: Iauthor[] | undefined;

  id: number = 0;

  @Output() saveBook: EventEmitter<Ibook> = new EventEmitter<Ibook>();

  book!:Ibook;

  ngOnInit() {
    this.formInit();
    this.getAuthor();

    this.eventServ.update.subscribe((book) => {
      this.id = book.id;
      this.form.patchValue(book);
    });

    this.eventServ.clearForm.subscribe(() => {
      this.clearForm();
    });
  }


  clearForm(){
    this.form.reset();
  }

  // Inicializar el formulario
  formInit() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required]),
      publication_date: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      author: new FormGroup({
        id: new FormControl('', [Validators.required]),
      }),
    });
  }

  save() {
    this.book = this.form.value as Ibook;
    this.book.id = this.id;
    this.saveBook.emit(this.book);
  }

  //List the authors
  getAuthor() {
    this.bookServ.getAuthors().subscribe((res: any) => {
      this.authors = res.content;
    });
  }

  // onEdit(book: any) {
  //   this.form.patchValue(book);
  // }

  llenarFormulario(book:Ibook){
    console.log("llenarformulario " +book)
    this.form.patchValue(book);
  }
}
