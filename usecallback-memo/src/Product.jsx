import React from 'react'

function Product({product, addToCart}) {
    console.log("Product component renderd")
  return (
    <>
        <li>{product}</li>
        <button onClick={addToCart}>Add to cart</button>
    </>
  )
}

export default Product