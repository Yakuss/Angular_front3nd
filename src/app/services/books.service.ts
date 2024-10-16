import { Injectable } from '@angular/core';
import { Book } from '../model/books.model';
import { BookType } from '../model/bookType.model';
import { Observable , tap} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLCat, apiURLty } from '../config';
import { BookTypeWrapper } from '../model/BookTypeWrapped.model';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  //apiURL: string = 'http://localhost:8082/books/api';
  apiURLCatt: string = 'http://localhost:8082/books/cat';


  books !: Book[];
  booksType !: BookType[];
  book! : Book ;



  constructor( private http : HttpClient) {

   }

   listBooks():Observable<Book[]>{
    return this.http.get<Book[]>(apiURL);
   }


   addBook(book : Book):Observable<Book> {
    return this.http.post<Book>(apiURL , book , httpOptions )
   }


  deleteBook(bookId : number) {
    const url = `${apiURL}/${bookId}`;
    return this.http.delete(url, httpOptions);
    }


  consulterBook(id: number): Observable<Book> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Book>(url);
    }


 /* updateBook(b : Book ){
    this.deleteBook(b.id!);
    this.addBook(b);
    this.trierBooks()
  }*/

  updateBook(boo :Book) : Observable<Book>
  {
    return this.http.put<Book>(apiURL, boo, httpOptions);
  }


  trierBooks(ascending: boolean = true) {
    this.books = this.books.sort((a, b) => {
      if (a.id! > b.id!) {
        return ascending ? 1 : -1;
      } else if (a.id! < b.id!) {
        return ascending ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  //types


  listeTypes(): Observable<BookTypeWrapper> {
    return this.http.get<BookTypeWrapper>(apiURLCat);
  }

 /* rechercherParBookType(id: number):Observable<Book[]> {
    const url = `${apiURLty}/${id}/books`;
    return  this.http.get<Book[]>(url);
  }*/

  rechercherParBookType(id: number): Observable<any> {
    const url = `${apiURLty}/${id}/books`;
    return this.http.get(url).pipe(
      tap(response => {
        console.log('Response from rechercherParBookType:', response); // Check if this is an array or an object with _embedded
      })
    );
  }


  rechercherParNom(nom: string):Observable< Book[]> {
    const url = `${apiURL}/booksByTitle/${nom}`;
    return this.http.get<Book[]>(url);
    }

    ajouterType( boo: BookType):Observable<BookType>{
      return this.http.post<BookType>(this.apiURLCatt, boo, httpOptions);
      }

}
