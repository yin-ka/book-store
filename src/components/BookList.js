import React from 'react';
import Book from './Book';

const booksArr = [
  {
    genre: 'Action',
    title: 'The Hunger games',
    author: 'Sizanne collins',
    progress: '64',
    status: 'Completed',
  }, {
    genre: 'Fiction',
    title: 'Fetisious Fantancy',
    author: 'Yusuf Sholotan',
    progress: '8',
    status: 'Pending',
  }, {
    genre: 'Romance',
    title: 'My Heart is Yours',
    author: 'Amidat Abdulgaffar',
    progress: '0',
    status: 'Pending',
  },
];
function BookList() {
  return (
    <>
      {booksArr.map((book) => (
        <Book
          key={book.title + book.genre}
          genre={book.genre}
          title={book.title}
          author={book.author}
          progress={book.progress}
          status={book.status}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;
