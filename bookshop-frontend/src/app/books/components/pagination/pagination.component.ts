import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() totalPages:number = 0;

 currentPage:number = 0;
 @Output() page:EventEmitter<number> = new EventEmitter<number>

  constructor(private routerAct:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.routerAct.queryParams.subscribe((param: any) => {
      this.currentPage = param.page;
    });
    this.router.navigate(['books/list'], {
      queryParams: { page: this.currentPage },
    });
  }


  previusPage(){
    if (this.currentPage >= 1) {
      this.currentPage--;
    }
    this.page.emit(this.currentPage);
  }

  getBooks(page:number){
    console.log("evento")
    this.page.emit(page);
  }

  nextPage(){
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
    this.page.emit(this.currentPage);
  }
}
