import { Iauthor } from './../../models/iauthor';
import { AuthorService } from './../../services/author.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  //Object for data
  authors: Iauthor[] = [];
  author: Iauthor = {
    id: 0,
    name: '',
    lastname: '',
    biography: '',
  };

  search: string = '';

  totalPages: number = 0;
  currentPage: number = 0;

  constructor(private authorServ: AuthorService) {
    this.getAuthors(this.currentPage);
  }

  getAuthors(page: number) {
    this.authorServ.listAuthors(page).subscribe((res: any) => {
      this.authors = <Iauthor[]>res.content;
      this.totalPages = res.totalPages;
      this.currentPage=page;
    });
    
  }

  //save or update
  onSubmit() {
    const btnClose = document.getElementById('close');
    if (this.author.id == 0) {
      this.authorServ.save(this.author).subscribe((res: any) => {
        btnClose?.click();
        this.getAuthors(this.currentPage);
      });
    } else {
      this.authorServ.update(this.author.id, this.author).subscribe((res) => {
        btnClose?.click();
        this.getAuthors(this.currentPage);
      });
    }
  }

  //seleccionar
  onSelected(author: Iauthor) {
    this.author = author;
  }

  //delete
  onDelete() {
    const btnDeleteClose = document.getElementById('btn-delete-close');
    this.authorServ.delete(this.author.id).subscribe((res) => {
      btnDeleteClose?.click();
      this.getAuthors(this.currentPage);
    });
  }

  onSearch() {
    if (this.search.length > 0) {
      this.authorServ.search(this.search).subscribe((res) => {
        this.authors = <Iauthor[]>res;
      });
    } else {
      this.getAuthors(this.currentPage);
    }
  }

  previusPage() {
    if (this.currentPage >= 1) {
      this.currentPage--;
    }
    this.getAuthors(this.currentPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages-1) {
      this.currentPage++;
    }
    this.getAuthors(this.currentPage);
  }

}
