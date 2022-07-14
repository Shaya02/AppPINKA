/*import React from 'react';
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
     
        );
      }
*/

import React from 'react';
import { useNavigate } from "react-router-dom";
import { productos } from '../../data/data';

const Item = ({ name }) => {

  const navigate = useNavigate();

  const handleDetail = ()=> {
    console.log("Navega hacia el detail");
    navigate(`/detail/${productos.id}`)
  }

  return (
    <div 
         style={
      {
        borderRadius:'15px',
        width: '15%',
        margin: '20px',
        backgroundColor: 'pink',
        border:0,
        padding: '30px',
        fontSize: '25px',
        boxShadow: '4px 6px 18px 5px rgba(0, 0, 0, 0.85)',
        color: 'white',
      }}
      onClick={handleDetail}
    > {name}</div >
  )
}
    
export default Item;
