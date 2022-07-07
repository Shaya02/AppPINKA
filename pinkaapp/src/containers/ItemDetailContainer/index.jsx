
import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail';
import { productos } from '../../data/data';


const ItemDetailContainer= () => {
    const [productDetail, setProductDetail] = useState ({})
    useEffect(() => {
        const lista=productos
        const getProductos=async()=> {
        try {
            const response= await fetch (lista);
            const data= await response.json();
            setProductDetail(data)
        } catch (error) {
            console.log(error)
        }
    }
    getProductos();
      }, []);

return (
<ItemDetail product={productDetail}/>
)
}
export default ItemDetailContainer