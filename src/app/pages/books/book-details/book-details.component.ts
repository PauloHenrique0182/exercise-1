import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../../infrastructure/types/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{


  route = inject(ActivatedRoute);
  bookService = inject(BookService);

  book?: Book;

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(+id).subscribe((data) => {
        this.book = data;
      });
    }
  }

}
