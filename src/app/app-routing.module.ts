import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { RechercheParBooktypeComponent } from './recherche-par-booktype/recherche-par-booktype.component';
import { RechercheParTitleComponent } from './recherche-par-title/recherche-par-title.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';

const routes: Routes = [
  {path: "books" , component : BooksComponent},
  {path : "add-book" , component : AddBookComponent},
  { path :"updatebook/:id" , component : UpdatebookComponent},
  { path :"rechercheParBookType" , component : RechercheParBooktypeComponent},
  { path : "rechercheParTitle" , component : RechercheParTitleComponent},
  {path : "listTypes" , component : ListeTypesComponent},
  {path : "" , redirectTo : "books" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
