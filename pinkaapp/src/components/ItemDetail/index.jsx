import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonCount from '../ButtonCount';
import { Shop } from '../../Context/ShopProvider';



const ItemDetail = ({ productos}) => {

    const navigate = useNavigate();

    productos.stock = 5;
    const [qtyAdded, setQtyAdded] = useState(0);
    
    const {addItem}=useContext(Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        addItem(productos, qtyAdded)
        navigate(`/cart`)
    }

    console.log(qtyAdded);

    return (
        <div className='container-detail'>
            <h1>{productos.nombre}</h1>
            <img src={productos.imagen} alt="product"/>
            <p>{productos.category}</p>
            { !qtyAdded ?
                <ButtonCount onConfirm={handleConfirm} maxQuantity={productos.stock} />
                :
                <button onClick={handleTerminate}>Terminar compra</button>
            }
        </div>
    )
}

export default ItemDetail