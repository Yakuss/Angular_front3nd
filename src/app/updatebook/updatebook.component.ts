import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/books.model';
import { BookType } from '../model/bookType.model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styles: ``
})
export class UpdatebookComponent implements OnInit{

  currentBook = new Book();
  formattedDate?: string | null;
  booktype! : BookType[];
  updateBTID! : number;
  constructor(private booksService : BooksService , private activatedroute : ActivatedRoute, private router : Router){

  }

  ngOnInit(): void {

    this.booksService.listeTypes().subscribe(typ => { this.booktype = typ._embedded.bookTypes;
      console.log(typ);
    })

    this.booksService.consulterBook(this.activatedroute.snapshot.params['id']).
     subscribe( boo =>{ this.currentBook = boo;
      this.updateBTID = this.currentBook.bookType?.id!;
      } ) ;

   if (this.currentBook.publicationDate) {
      this.formattedDate = this.formatDateForInput(this.currentBook.publicationDate);
    }
    console.log(this.currentBook);
  }





  formatDateForInput(date: Date | undefined): string | null {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onDateChange(event: string): void {
    this.formattedDate = event; // Store the string value
    this.currentBook.publicationDate = new Date(event); // Convert the string back to Date
  }




  updateBook() {
    /*this.booksService.updateBook(this.currentBook).subscribe(prod => {
    this.router.navigate(['books']); }
    );*/
    this.currentBook.bookType = this.booktype.find(typ => typ.id = this.updateBTID)!;
    this.booksService.updateBook(this.currentBook).subscribe(boo => {
      this.router.navigate(['books']);
    })
    }





}
