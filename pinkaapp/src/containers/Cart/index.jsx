import React, {useContext} from 'react'
import { Shop } from '../../Context/ShopProvider';





const Cart = (addItem) => {
  const {cart} = useContext(Shop);
console.log(cart, addItem);
  return ( 
    <>
    <ul>
      {cart.map(productos => {
        return <li key={productos.id}>
         <h3> {productos.nombre} </h3>
          <img src={productos.imagen} width='80px' alt={productos.nombre}/> 
          </li>
      })}
    </ul>
    </>
  )}
  
export default Cart 
   
