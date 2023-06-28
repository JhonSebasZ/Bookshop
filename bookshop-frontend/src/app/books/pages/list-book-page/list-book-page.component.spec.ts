import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookPageComponent } from './list-book-page.component';

describe('ListBookPageComponent', () => {
  let component: ListBookPageComponent;
  let fixture: ComponentFixture<ListBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBookPageComponent]
    });
    fixture = TestBed.createComponent(ListBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
