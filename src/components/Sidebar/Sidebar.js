import React from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';

const Sidebar = () => (
  <div className={styles.root}>
    <ul>
      <li>
        <Link>Option1</Link>
      </li>
      <li>
        <Link>Option2</Link>
      </li>
      <li>
        <Link>Option3</Link>
      </li>
      <li>
        <Link>Option4</Link>
      </li>
      <li>
        <Link>Option5</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
