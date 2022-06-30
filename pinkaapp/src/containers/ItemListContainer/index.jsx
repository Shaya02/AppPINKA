import React from 'react';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    const onAdd = () => {
        console.log("Se agrego al carrito")
             
    }
    return (
       <div>
        <h2> {greeting}</h2>
        <ItemCount onAdd={onAdd} inicial={1} stock ={5}/>
        <ItemList/>
       </div> 
    )
    }

export default ItemListContainer;