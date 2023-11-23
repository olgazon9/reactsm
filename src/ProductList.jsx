import React from 'react';
import Product from './Product';

const ProductList = () => {
  // Initialize some sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 29.99, category: 'Clothing' },
    { id: 3, name: 'Product 3', price: 9.99, category: 'Groceries' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
