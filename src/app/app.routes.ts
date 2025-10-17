import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { BookListComponent } from './pages/books/book-list/book-list.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';

export const routes: Routes = [
     { path: 'header', component: HeaderComponent },
     { path: 'login', component: LoginComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'books', component: BookListComponent },
     { path: 'books/:id', component: BookDetailsComponent },
];
