import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './authors/components/author/author.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ListBookPageComponent } from './books/pages/list-book-page/list-book-page.component';
import { DetailBookPageComponent } from './books/pages/detail-book-page/detail-book-page.component';

const routes: Routes = [
  {
    path:'home',
    title:'Books List',
    component: HomeComponent
  },
  {
    path:'auth',
    title:'Auth',
    component: LoginPageComponent
  },
  {
    path:'books/list',
    title:'Books List',
    component: ListBookPageComponent
  },
  {
    path:'books/list/:id',
    title:'Books List',
    component: DetailBookPageComponent
  },
  {
    path:'author/list',
    title:'Author List',
    component: AuthorComponent
  },
  {
    path:'prueba',
    title:'Prueba',
    component: PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
