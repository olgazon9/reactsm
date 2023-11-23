import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import History from './History';
import Future from './Future';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <nav>
        <Link to="/about/history">History</Link>
        <Link to="/about/future">Future</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
