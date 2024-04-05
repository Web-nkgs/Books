import { Subject } from "rxjs";

export class BooksService {
  /* Subject is a type of observable, the emits an event when theres a change, 
  in this case on adding a book.
  */
  booksSubject = new Subject()

  private books = ['Calculo I', 'Calculo I', 'Ecuaciones Diferenciales'];

  addBook(title: string) {
    this.books.push(title);
    this.booksSubject.next(null)
  }

  deleteBook(title: string) {
    this.books = this.books.filter((book) => book !== title)
    this.booksSubject.next(null)

  }

  getBooks() {
    return [...this.books];
  }
}
