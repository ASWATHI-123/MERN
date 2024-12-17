import React, { useMemo, useState, useCallback } from 'react';
import Product from './Product';

const ProductsList = ({ products }) => {
  console.log("Product list component rendered...");
  
  const [searchText, setSearchText] = useState('');
  console.log(searchText);


  const filteredProducts = useMemo(() => {
    console.log("Inside useMemo");
    return products.filter((p) => p.includes(searchText));
  }, [searchText, products]);


  const addToCart = useCallback(() => {
    console.log("Product added to cart");
    
  }, []); 

  return (
    <div>
      <h2>Products</h2>
      <input 
        type='text' 
        placeholder='Search products' 
        onChange={(e) => setSearchText(e.target.value)} 
      />
      <ul>
        {filteredProducts.map((p, i) => (
          <Product key={i} product={p} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ProductsList);
