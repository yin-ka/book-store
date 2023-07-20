import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/AddBook.css';
import Button from './Button';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const clickHandler = () => {
    const id = Math.floor(Math.random() * 1000000);
    dispatch(addBook({
      item_id: `itemId${id + 1}`,
      title,
      author,
      category: 'Action',
    }));
  };
  return (
    <div className="form-wrapper">
      <h2 className="add-head">ADD NEW BOOK</h2>
      <form className="add-book">
        <input type="text" name="title" placeholder="Book Title" className="input-one" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Book Author" className="input-two" onChange={(e) => setAuthor(e.target.value)} />
        <Button className="add-button" onClick={clickHandler} title="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;
