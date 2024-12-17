import React, { useMemo,useState } from 'react';

const ProductsList = ({ products }) => {
  console.log("Child rendered");
  const [searchText,setSearchText] = useState('');
  console.log(searchText);

  // const filteredproducts = products.filter((p)=>{
  //   console.log("Inside filter")
  //   return p.includes(searchText)
  // });

  const filteredproducts = useMemo(()=>{
    console.log("Inside useMemo");

    return products.filter((p)=>p.includes(searchText));
  },[searchText,products]);


  return (
    <div>
      <h2>Product</h2>
      <input type='text' placeholder='Search products' onChange={(e)=>setSearchText(e.target.value)}/>
      <ul>
        {filteredproducts.map((product, i) => (
          <li key = {i} >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
