import React from 'react';

const ItemDetail= ({product}) => {
    console.log(product);
return (
  <div> 
    <h1> {product.title}</h1>
    <img src= {product.image} alt=""/>
    <h3> {product.description}</h3>

    
  </div>
)
}
export default ItemDetail