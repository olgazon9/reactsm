// Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
       <h5 class="card-title">{product.name}</h5>
       <div class="card-body">
      <p class="card-text" className="btn btn-primary">Price: ${product.price}</p>
      <p class="card-text">Category: {product.category}</p>
    </div></div>
  );
};

export default Product;
