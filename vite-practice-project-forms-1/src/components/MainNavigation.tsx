import React from 'react';
import { Link } from 'react-router';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
};

export default MainNavigation;