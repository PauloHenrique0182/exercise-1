import { Component, inject } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../../infrastructure/types/book';
import { AsyncPipe, NgComponentOutlet, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [NgFor, AsyncPipe, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  bookService = inject(BookService);
  books$: Observable<Book[]> = this.bookService.getBooks();

}
