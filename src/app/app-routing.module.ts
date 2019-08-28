import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:isbn',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-add',
    component: BookAddComponent,
    data: { title: 'Book Add' }
  },
  {
    path: 'book-edit/:isbn',
    component: BookEditComponent,
    data: { title: 'Book Edit' }
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];


@NgModule({

  declarations: [

    BookAddComponent,
    BookDetailComponent,
    BookEditComponent,
    BookComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[RouterModule] 

})
export class AppRoutingModule { }
