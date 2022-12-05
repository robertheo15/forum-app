import React from 'react';
import { Link } from 'react-router-dom';

const myStyle = {
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const NotFoundPage = () => (

  <section style={myStyle}>
    <h2>404</h2>
    <p>Page not found</p>
    <Link to="/">
      Back to home
    </Link>
  </section>
);

export default NotFoundPage;
