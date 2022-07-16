import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import {useParams} from 'react-router-dom';
import { productos } from '../../data/data';
import ButtonCount from '../../components/ButtonCount';

const ItemDetailContainer = () => {

    const [productosDetail, setProductosDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(()=> {
       const lista=productos;
        const getProductos = async () => {
            try {
                const response = await fetch (lista ` ${params.productosId}`)
                const data = await response.json();
                setProductosDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productosDetail).length !== 0 ?
        <ItemDetail productos={productosDetail}/>
    
        :
        <p>Cargando...</p>
        
    )
}

export default ItemDetailContainer
