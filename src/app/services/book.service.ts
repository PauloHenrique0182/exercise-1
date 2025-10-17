import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../infrastructure/types/book';
import { map, Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BookService {

  constructor(private readonly http: HttpClient) { }

  private readonly api = "https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books";

  getBooks() {
    return this.http.get<Book[]>(`${this.api}`);
  }

  getBook(id: number) {
    return this.http.get<Book>(`${this.api}/${id}`);
  }

  getBooksAlreadyRead(): Observable<Book[]> {
    return this.getBooks().pipe(
      map(books => books.filter(book => book.alreadyRead))
    );
  }

  getBooksNotRead(): Observable<Book[]> {
    return this.getBooks().pipe(
      map(books => books.filter(book => !book.alreadyRead))
    );
  }

}
