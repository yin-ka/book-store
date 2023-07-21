import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/AddBook.css';
import Button from './Button';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const id = Math.floor(Math.random() * 1000000);
      dispatch(addBook({
        item_id: `itemId${id + 1}`,
        title,
        author,
        category: 'Action',
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="form-wrapper">
      <h2 className="add-head">ADD NEW BOOK</h2>
      <form className="add-book">
        <input type="text" name="title" placeholder="Book Title" className="input-one" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Book Author" className="input-two" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Button classname="add-button" onClick={clickHandler} title="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;
