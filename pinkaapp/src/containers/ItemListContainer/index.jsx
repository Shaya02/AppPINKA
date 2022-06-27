import React from 'react';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) => {
    const handleAdd = () => {
        console.log("Se agrego al carrito")
    }
    return (
       <div>
        <h2> {greeting}</h2>
        <ItemCount handleAdd={handleAdd}/>
       </div> 
    )
}
export default ItemListContainer