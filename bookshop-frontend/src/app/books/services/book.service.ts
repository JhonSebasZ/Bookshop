import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  //save book
  save(book: any) {
    return this.http.post('http://localhost:8080/api/v1/book/save', book).pipe(
      map((data) => {
        return data;
      })
    );
  }

  //Method List
  list(page: number) {
    return this.http
      .get(
        'http://localhost:8080/api/v1/book/list/page?page=' +
          page +
          '&size=4&sort=title,asc'
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  //Update book
  update(id: number, book: any) {
    return this.http
      .put('http://localhost:8080/api/v1/book/update/' + id, book)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  //Delete book
  delete(id: number) {
    return this.http
      .delete('http://localhost:8080/api/v1/book/delete/' + id)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  // Method for list the authors
  getAuthors() {
    return this.http.get('http://localhost:8080/api/v1/author/list').pipe(
      map((data) => {
        return data;
      })
    );
  }

  //Search book
  search(title: String) {
    return this.http
      .get('http://localhost:8080/api/v1/book/search/' + title)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

}
