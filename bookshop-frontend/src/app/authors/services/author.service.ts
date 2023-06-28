import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  //save author
  save(author: any) {
    return this.http.post('http://localhost:8080/api/v1/author/save', author).pipe(
      map((data) => {
        return data;
      })
    );
  }

  // Method for list the authors
  listAuthors(page:number) {
    return this.http.get('http://localhost:8080/api/v1/author/list/page?page='+page+'&size=3&sort=name,asc').pipe(
      map((data) => {
        return data;
      })
    );
  }

  //Update author
  update(id: number, author: any) {
    return this.http.put('http://localhost:8080/api/v1/author/update/'+id, author).pipe(
      map((data) => {
        return data;
      })
    );
  }

  //Delete author
  delete(id:number){
    return this.http.delete('http://localhost:8080/api/v1/author/delete/'+id).pipe(
      map(data=>{
        return data;
      })
    )
  }

  //Search author
  search(name: String) {
    return this.http
      .get('http://localhost:8080/api/v1/author/search/' + name)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
