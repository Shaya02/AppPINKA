import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import {useParams} from 'react-router-dom';
import { productos } from '../../data/data';
import{doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [productosDetail, setProductosDetail] = useState({productos})

    const params = useParams()

    console.log(productosDetail);

    useEffect(()=> {
       //const lista=productos;
        const getProductos = async () => {
            try {
                     const docRef = doc(db, "productos", params.productosId); 
                     const docSnap = await getDoc(docRef);
            if       (docSnap.exists()) {
                      console.log(docSnap.id);
                     console.log("Datos del documento:", docSnap.data()) ;
                     const productosDetail={id: docSnap.id, ...docSnap.data()};
                     setProductosDetail=(productosDetail);
                 } else {// doc.data() no estará definido en este caso
                  console.log("¡No existe tal documento!");
             }

               /*const response = await fetch (lista ` ${productosDetail}`)
                const data = await response.json();
                setProductosDetail(data)*/
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [productosDetail])

    return (
        Object.keys(productosDetail).length !== 0 ?
        <ItemDetail productos={productosDetail}/>
    
        :
        <p>Cargando...</p>
        
    )
}

export default ItemDetailContainer
