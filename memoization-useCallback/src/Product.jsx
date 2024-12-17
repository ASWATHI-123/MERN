import React from 'react'

function Product({product,addTocart}) {
    console.log("product component rendered ");
  return (
    <>
        <li>{product}</li>
        <button onClick={addTocart}>Add to cart</button>
    </>
  )
}

export default Product