import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { productos } from '../../data/data';


const ItemList = () => {
  const [products, setProducts] = useState([]);

  
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };


  useEffect(() => {
    getProductsFromDB();
  }, );

  return (
    <div className="product-list-container">
      {
        products.length ? ( 
          <>
            {
           
             products.map((productos) => {
               
                return (
                  <div key={productos.id} >
                    <Item
                      name={productos.nombre}
                      imagen={productos.imagen}
                      price={productos.precio}
                      stock={productos.stock}
                    />
                    
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;