import React, {useContext} from 'react'
import { Shop } from '../../Context/ShopProvider';



const Cart = () => {
  const {cart} = useContext(Shop);

  console.log(cart);
  return (
    <ul>
      {cart.map(productos => {
        return <li key={productos.id}>{productos.nombre} <img src={productos.image} width='80px' alt={productos.nombre}/></li>
      })}
    </ul>
  )}

export default Cart 