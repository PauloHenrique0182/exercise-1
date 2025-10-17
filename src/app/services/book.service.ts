import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../infrastructure/types/book';

@Injectable(
  {
  providedIn: 'root'
}
)
export class BookService {

  constructor(private readonly http: HttpClient) { }

  private readonly api = "https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books";

  getBooks(){
    return this.http.get<Book[]>(`${this.api}`);
  }

  getBook(id: number){
    return this.http.get<Book>(`${this.api}/${id}`);
  }
  
}
