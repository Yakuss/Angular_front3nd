import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookType } from '../model/bookType.model';

@Component({
  selector: 'app-update-types',
  templateUrl: './update-types.component.html'
})
export class UpdateTypesComponent  implements OnInit{
  @Input()
  bookType!:BookType;

  @Input()
  ajout!:boolean;


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.bookType);
  }

  @Output()
  typeUpdated = new EventEmitter<BookType>();

  savetype(){
    this.typeUpdated.emit(this.bookType);
  }

}
