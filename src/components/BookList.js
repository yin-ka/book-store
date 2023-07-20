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
  }, [dispatch]);

  const transformedData = Object.entries(booksArr).map(([item_id, items]) => {
    const [item] = items;
    return { item_id, ...item };
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
          key={book.item_id + book.title}
          id={book.item_id}
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
