import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();

  const booksArr = useSelector((state) => state.book.books);
  const booksStatus = useSelector((state) => state.book.status);
  const booksError = useSelector((state) => state.book.error);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const transformedData = Object.entries(booksArr).map(([id, items]) => {
    const [item] = items; // assume there is only one item in each array
    return { id, ...item };
  });
  const clickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  if (booksStatus === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  if (booksError !== null) {
    return (
      <h1 style={{ marginLeft: '40px' }}>{booksError}</h1>
    );
  }

  return (
    <>
      {transformedData.map((book) => (
        <Book
          key={book.itemId + book.title}
          id={book.itemId}
          category={book.category}
          title={book.title}
          author={book.author}
          onClick={clickHandler}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;
