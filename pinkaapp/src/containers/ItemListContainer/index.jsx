import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import ButtonCount from '../../components/ButtonCount';
import{collection, query, getDocs} from "firebase/firestore";
import { db } from '../../firebase/config';



const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams()
  
    console.log(params);
  
    useEffect(() => {
      //const lista=productos;
      const getProductos = async () => {
        try {
              const q= query(collection(db, "productos"));
              const querySnapshot= await getDocs(q);
              const products=[]
              querySnapshot.forEach((doc)=>{
               // console.log(doc.id, "=>", doc.data() );
                products.push({id:doc.id, ...doc.data()})
              });
          console.log(products);


      //  const response = await fetch(lista);
        //  const data = await response.json()
          setProductos(products);
          setProductosFiltrados(products);
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