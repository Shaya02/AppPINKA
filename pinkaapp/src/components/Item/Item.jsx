import React from 'react';
import './item.css';

const Item = ({ name, thumbnail, price, stock }) => {
        return (
        
           <div className="card">
                <img src ={thumbnail} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> ${price}</p>
                    <p className="card-text"> Stock:{stock}</p>
                </div>
            </div>
        )
    };

export default Item;
