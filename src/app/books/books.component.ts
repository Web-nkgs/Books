import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit, OnDestroy {
   books: string[]
   private _bookSubscription: Subscription | null

//    constructor: Only for initilizing vars and constructing instances of objects
  constructor(private _booksService: BooksService) {
    this.books = []
    this._bookSubscription = null
  }

  ngOnInit(): void {
    this.books = this._booksService.getBooks()
    this._bookSubscription = this._booksService.booksSubject.subscribe(() => {
      this.books = this._booksService.getBooks()
    })
  }

  ngOnDestroy(): void {
    if (this._bookSubscription) {
    this._bookSubscription.unsubscribe()
    }
  }

  // deleteBook(title: string): void {
  //   this._booksService.deleteBook(title)
  // }

  saveBook(form: NgForm): void {
    this._booksService.addBook(form.value.title)
  }
}
