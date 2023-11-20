// App.js
import React from 'react';
import ProductList from './ProductList';

const App = () => {
  // Initialize some sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 29.99, category: 'Clothing' },
    { id: 3, name: 'Product 3', price: 9.99, category: 'Groceries' },
  ];

  return (
    <div className="app">
      <h1>Supermarket App</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
