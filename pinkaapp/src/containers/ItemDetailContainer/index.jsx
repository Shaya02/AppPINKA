import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import {useParams} from 'react-router-dom';
import { productos } from '../../data/data';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(()=> {
       const lista=productos;
        const getProductos = async () => {
            try {
                const response = await fetch (lista ` ${params.productosId}`)
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
        <ItemDetail productos={productDetail}/>
        :
        <p>Cargando...</p>
    )
}

export default ItemDetailContainer
