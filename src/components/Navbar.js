import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ books, categories }) {
  return (
    <nav>
      <div className="nav-main">
        <h2 className="logo">BookStore CMS</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to={books} activeClassName="active">BOOKS</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={categories} activeClassName="active">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <div className="profile-tab">Profile</div>
    </nav>
  );
}

Navbar.defaultProps = {
  books: '',
  categories: '',
};
Navbar.propTypes = {
  books: PropTypes.string,
  categories: PropTypes.string,
};

export default Navbar;
