import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import {useParams} from 'react-router-dom';
import { productos } from '../../data/data';

const ItemDetailContainer = () => {

    const [productosDetail, setProductosDetail] = useState({productos})

    const params = useParams()

    console.log(productosDetail);

    useEffect(()=> {
       const lista=productos;
        const getProductos = async () => {
            try {
                const response = await fetch (lista ` ${productosDetail}`)
                const data = await response.json();
                setProductosDetail(data)
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
