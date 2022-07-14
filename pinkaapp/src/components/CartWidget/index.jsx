import React from 'react';
import {TbShoppingCart} from 'react-icons/tb';
import './CartWidget.css';
import { Shop } from '../../Context/ShopProvider';


const CartWidget = () => {
    const {cart} = React.useContext(Shop);
    return (
        <div>  <TbShoppingCart className="logo"/> 
        {cart.length && <span> ({cart.length})</span>}
        
        </div>

       
    )
}
export default CartWidget