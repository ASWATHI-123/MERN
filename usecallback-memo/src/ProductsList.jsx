import React, { useMemo, useState } from 'react';

const ProductsList = ({ products }) => {
  console.log("Product list component rendered");
  const [searchText, setSearchText] = useState('');
  console.log(searchText);

  // Memoized filtered products
  const filteredproducts = useMemo(() => {
    console.log("Inside useMemo");
    return products.filter((p) => p.includes(searchText));
  }, [searchText, products]);

  const addToCart = () => {
    console.log("add to cart invoked");
  };

  return (
    <div>
      <h2>Products</h2>
      <input type='text' placeholder='Search products' onChange={(e) => setSearchText(e.target.value)} />
      <ul>
        {filteredproducts.map((product, i) => (
          <Product key={i} product = {product} addToCart = {addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
