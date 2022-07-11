import React from 'react';
import ButtonCount from '../../components/ButtonCount';
import ItemList from '../../components/ItemList';


const ItemListContainer = ({greeting}) => {
    const handleConfirm = (quantity) => {
        console.log("Se agrego al carrito la cantidad de : " + quantity);
             
    }
    
    return (
        <div>
       
      
        <h2> {greeting}</h2>
      
        <ItemList/>
        <ButtonCount onConfirm={handleConfirm} maxQuantity={10}/>
      
       </div> 
    )
    }

export default ItemListContainer;