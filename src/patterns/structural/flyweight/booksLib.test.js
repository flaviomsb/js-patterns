import addBook, { bookList, bookMap } from './booksLib';

describe('Flyweight pattern', () => {
  test('addBook', () => {
    addBook({
      title: 'JavaScript, The Definitive Guide',
      author: 'David Flanagan',
      isbn: 'AB123',
      availability: false,
      sales: 100,
    });
    addBook({
      title: 'JavaScript, The Definitive Guide',
      author: 'David Flanagan',
      isbn: 'AB123',
      availability: true,
      sales: 50,
    });
    addBook({
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: 'CD345',
      availability: true,
      sales: 10,
    });
    addBook({
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: 'CD345',
      availability: false,
      sales: 20,
    });
    addBook({
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: 'EF567',
      availability: false,
      sales: 20,
    });

    expect(bookList.length).toBe(5);
    expect(bookMap.size).toBe(3);
  });
});
