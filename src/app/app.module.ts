import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BooksService } from './services/books.service';

// Decorator: En Angular permite ser modificado antes de ser instanceado.
@NgModule({
  // Declararemos los componentes que queremos usar en la app.
  declarations: [
    AppComponent,
    UserComponent,
    BooksComponent,
    BookComponent
  ],
  // Importaremos modulos o directivas.
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Servicios.
  providers: [BooksService],
  // Comoponente principal de la app.
  bootstrap: [AppComponent]
})
export class AppModule { }
