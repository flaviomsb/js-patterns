import Book from './Book';

const bookList = [];
const bookMap = new Map();

export function createBook({ title, author, isbn }) {
  if (bookMap.has(isbn)) return bookMap.get(isbn);

  const book = new Book(title, author, isbn);
  bookMap.set(isbn, book);

  return book;
}

export default function addBook({
  title, author, isbn, availability, sales,
}) {
  const book = {
    ...createBook({ title, author, isbn }),
    sales,
    availability,
    isbn,
  };

  bookList.push(book);

  return book;
}

export { bookList, bookMap };
