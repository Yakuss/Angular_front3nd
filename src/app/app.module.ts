import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RechercheParBooktypeComponent } from './recherche-par-booktype/recherche-par-booktype.component';
import { RechercheParTitleComponent } from './recherche-par-title/recherche-par-title.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypesComponent } from './update-types/update-types.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    UpdatebookComponent,
    RechercheParBooktypeComponent,
    RechercheParTitleComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
