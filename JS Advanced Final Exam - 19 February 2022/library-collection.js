"use strict";

class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length === this.capacity) {
      throw new Error(`Not enough space in the collection.`);
    }
    const book = { bookName, bookAuthor, payed: false };
    this.books.push(book);
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const foundBook = this.books.find((book) => book.bookName === bookName);
    if (foundBook === undfined) {
      throw new Error(`${bookname} is not in the collection.`);
    }
    if (foundBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }
    foundBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const foundBook 
  }
}

const library = new LibraryCollection(2);
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.addBook("Ulysses", "James Joyce"));
