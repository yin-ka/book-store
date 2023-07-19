import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const booksArr = useSelector((state) => state.book.books);
  return (
    <>
      {booksArr.map((book) => (
        <Book
          key={book.itemId}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;
