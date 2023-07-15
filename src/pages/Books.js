import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Books() {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <BookList />
      <AddBook />
      <br />
    </div>
  );
}

export default Books;
