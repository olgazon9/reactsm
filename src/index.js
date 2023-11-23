import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductList from './ProductList';
import About from './About';
import History from './History';
import Future from './Future';

const AppWithRouting = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/future" element={<Future />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouting />
  </React.StrictMode>,
  document.getElementById('root')
);