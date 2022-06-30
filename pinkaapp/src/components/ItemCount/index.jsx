import React from 'react';
import { useState } from 'react';
import './itemCount.css';

const ItemCount= ({onAdd}) => {
const inicial=1;
const stock= 5;
const [qty, setQty] = useState(inicial);
const addProduct = (num) => {
  setQty(qty + num);
};
return (
  <div className="count-container">
    <div className="count-contador">
      <button
        className="count-button"
        onClick={() => addProduct(-1)}
        disabled={qty === inicial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-button"
          onClick={() => addProduct(+1)}
         disabled={qty === stock ? true : null}
          >
            +
          </button>
        </div>
        <button
        className="button-primary"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

