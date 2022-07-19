class Book {
  #title;

  #author;

  #isbn;

  constructor(title, author, isbn) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get isbn() {
    return this.#isbn;
  }

  toString() {
    return `${this.#title} by ${this.#author}, ISBN-13: ${this.#isbn}`;
  }
}

export default Book;
