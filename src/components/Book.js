import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Book.css';
import PropTypes from 'prop-types';

function Book({
  category, title, author,
}) {
  return (
    <div className="book-wrapper">
      <div className="book-info">
        <p className="book-genre">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <ul className="book-actions">
          <li className="book-comment"><span>Comments</span></li>
          <li className="book-remove"><button type="button"> Remove </button></li>
          <li className="book-edit"><span>Edit</span></li>
        </ul>
      </div>
      <div className="progress-wrapper">
        <div className="book-progress">
          <div className="book-progress-bar"><CircularProgressbar value={50} /></div>
          <div className="book-progress-data">
            <div className="book-progress-percentage">
              {50}
              %
            </div>
            <div className="book-progress-status">completed</div>
          </div>
        </div>
        <div className="book-current">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-title">Chapter 17</p>
          <p className="chapter-button">UPDATE PROGRESS</p>
        </div>
      </div>
    </div>
  );
}
Book.defaultProps = {
  category: '',
  title: '',
  author: '',
};
Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
