import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/products">Go to Products</Link>
      <br />
    </>
  )
};

export default Home;