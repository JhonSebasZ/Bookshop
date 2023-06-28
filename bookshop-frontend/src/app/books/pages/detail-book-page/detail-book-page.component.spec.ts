import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookPageComponent } from './detail-book-page.component';

describe('DetailBookPageComponent', () => {
  let component: DetailBookPageComponent;
  let fixture: ComponentFixture<DetailBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBookPageComponent]
    });
    fixture = TestBed.createComponent(DetailBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
