import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Ibook } from '../../models/ibook';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-book-page',
  templateUrl: './list-book-page.component.html',
  styleUrls: ['./list-book-page.component.css'],
})
export class ListBookPageComponent implements OnInit{
  // datos de los libros
  books: any[] = [];
  selectedBook: Ibook|undefined;

  title: String = '';

  totalPages: number = 0;
  currentPage: number = 0;

  constructor(
    private bookServ: BookService,
    private eventServ: EventService,
    private router: Router,
    private routerAct: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routerAct.queryParams.subscribe((param: any) => {
      this.currentPage = param.page;
    });
    this.router.navigate(['books/list'], {
      queryParams: { page: this.currentPage },
    });
    this.getBooks(this.currentPage);
  }

  getBooks(page:number) {
    this.router.navigate(['books/list'], {
      queryParams: { page: page },
    });

    this.bookServ.list(page).subscribe((res: any) => {
      this.books = <any[]>res.content;
      this.totalPages = res.totalPages;
    });

    this.currentPage = page;
  }

  //administrator of books (Save/Update)
  onSubmit(book: Ibook) {
    if (book.id == 0) {
      this.bookServ.save(book).subscribe((res) => {
        const btnClose = document.getElementById('btn-close');
        btnClose?.click();
        this.getBooks(this.currentPage);
      });
    } else {
      this.bookServ.update(book.id, book).subscribe((res) => {
        const btnClose = document.getElementById('btn-close');
        btnClose?.click();
        this.getBooks(this.currentPage);
      });
    }
    this.clearForm();
  }

  //search book for title
  onSearch() {
    if (this.title.length > 0) {
      this.bookServ.search(this.title).subscribe((res: any) => {
        this.books = res;
      });
    } else {
      this.getBooks(this.currentPage);
    }
  }

  // Delete
  onDelete(book: Ibook) {
    this.bookServ.delete(book.id).subscribe((res: any) => {
      const btnClose = document.getElementById('btn-close-modal');
      btnClose?.click();
      this.getBooks(this.currentPage);
    });
  }

  clearForm() {
    this.eventServ.clearForm.emit();
  }
}
