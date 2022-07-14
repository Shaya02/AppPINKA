import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import ButtonCount from '../../components/ButtonCount';




const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams()
  
    console.log(params);
  
    useEffect(() => {
      const lista=productos;
      const getProductos = async () => {
        try {
          const response = await fetch(lista);
          const data = await response.json()
          setProductos(data);
          setProductosFiltrados(data);
        } catch (error) {
          console.log("Hubo un error:");
          console.log(error);
        }
      }
      getProductos()
    }, )

    useEffect(() => {
      if (params?.categoryId) {
        const productosFiltrados = productos.filter(productos=> productos.category === params.categoryId)
        setProductosFiltrados(productosFiltrados)
      } else {
        setProductosFiltrados(productos)
      }
    }, [params, productos])
  
    console.log(productos);
  
    const handleConfirm = (quantity) => {
      console.log("Se agregó la cantidad: " + quantity);
    }
 
  
    return (
      <div>
    

          <ItemList products={productosFiltrados} />
          <ButtonCount onConfirm={handleConfirm} maxQuantity={10}/>
    
        
      </div>
    )
  }

export default ItemListContainer;