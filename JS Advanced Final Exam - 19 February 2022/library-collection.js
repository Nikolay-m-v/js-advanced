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
    if (foundBook === undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (foundBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }
    foundBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const foundBook = this.books.find((book) => book.bookName === bookName);
    const bookFoundIndex = this.books.findIndex(
      (book) => book.bookName === bookName
    );

    if (foundBook === undefined) {
      throw new Error(`The book, you're looking for, is not found`);
    }

    if (foundBook.payed === false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books.splice(bookFoundIndex, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      const output = [
        `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`,
      ];

      this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .forEach((book) => {
          let paidOrNot = "Has Paid";
          if (book.payed === false) {
            paidOrNot = "Not Paid";
          }
          output.push(`${book.bookName} == ${book.bookAuthor} - ${paidOrNot}`);
        });
      return output.join("\n");
    } else {
      const foundAuthor = this.books.find(
        (book) => book.bookAuthor === bookAuthor
      );
      if (foundAuthor === undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      } else {
        let paidOrNot = "Has Paid.";
        if (foundAuthor.payed === false) {
          paidOrNot = "Not Paid";
        }
        return `${foundAuthor.bookName} == ${foundAuthor.bookAuthor} - ${paidOrNot}`;
      }
    }
  }
}

// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// console.log(library.payBook("In Search of Lost Time"));
// console.log(library.payBook("Don Quixote"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cervantes"));
