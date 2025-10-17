import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../../infrastructure/types/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  imports: [NgFor, AsyncPipe, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  bookService = inject(BookService);
  books$!: Observable<Book[]>;
  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.books$ = this.bookService.getBooks();
  }

  showRead() {
    this.books$ = this.bookService.getBooksAlreadyRead();
  }

  showUnread() {
    this.books$ = this.bookService.getBooksNotRead();
  }

}
