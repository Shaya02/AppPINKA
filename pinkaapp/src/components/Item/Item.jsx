import React from 'react';
import{ productos }from '../../data/data';

const Item = ({ nombre, imagen, precio, stock }) => {
        return (
        
           <div className="card">
                <img src className="card-img-top" alt=""> ${productos.imagen}</img>
                <div className="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p className="card-text">$ ${productos.precio}</p>
                    <p className="card-text">Stock: ${productos.stock}</p>
                </div>
            </div>
        )
    };

export default Item;
