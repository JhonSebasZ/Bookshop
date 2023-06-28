import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthorComponent } from './authors/components/author/author.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BookComponent } from './books/components/book/book.component';
import { BookFormComponent } from './books/components/book-form/book-form.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { DetailBookPageComponent } from './books/pages/detail-book-page/detail-book-page.component';
import { ListBookPageComponent } from './books/pages/list-book-page/list-book-page.component';
import { PaginationComponent } from './books/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthorComponent,
    PruebaComponent,
    BookComponent,
    BookFormComponent,
    HomeComponent,
    LoginFormComponent,
    LoginPageComponent,
    DetailBookPageComponent,
    ListBookPageComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
