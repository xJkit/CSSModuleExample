import React from 'react';
import { Link } from 'react-router';
// styles
import styles from './Navbar.css';

const Navbar = () => (
  <div className={styles.root}>
    <ul>
      <li>
        <Link to="/">App</Link>
      </li>
      <li>
        <Link to="/a">A</Link>
      </li>
      <li>
        <Link to="/b">B</Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
