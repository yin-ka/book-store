import React from 'react';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Book.css';

function Book() {
  const percentage = 66;
  return (
    <div className="book-wrapper">
      <div className="book-info">
        <p className="book-genre">Action</p>
        <p className="book-title">The Hunger games</p>
        <p className="book-author">Sizanne collins</p>
        <ul className="book-actions">
          <li className="book-comment">Comments</li>
          <li className="book-remove">Remove</li>
          <li className="book-edit">Edit</li>
        </ul>
      </div>
      <div className="progress-wrapper">
        <div className="book-progress">
          <div className="book-progress-bar"><CircularProgressbar value={percentage} /></div>
          <div className="book-progress-data">
            <div className="book-progress-percentage">64%</div>
            <div className="book-progress-status">Completed</div>
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

export default Book;
