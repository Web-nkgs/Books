import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() title: string;

  // @Output()
  // bookPicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _bookService: BooksService) {
    this.title = ''
  }

  onBookPicked() {
    this._bookService.deleteBook(this.title)
  }
}
