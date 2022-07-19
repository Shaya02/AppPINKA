import React, { createContext, useState } from 'react'


export const Shop= createContext();

const ShopProvider = ({children}) => {

    const[estadoA, setEstadoA]=useState("Valor por defecto");
    const [cart, setCart]=useState([]);
    const addItem=(productos, cantidad)=>{
      console.log(productos, cantidad);
      const productosRepetidos=isInCart(productos);
      console.log(productosRepetidos);
      if (productosRepetidos){
        productosRepetidos.quantity += cantidad
        setCart([...cart], productos)
      } else {
      setCart([...cart,{...productos, quantity:cantidad}])
    }

  }

  const removeItem = (id) => {
    const productosFiltrados = cart.filter(producto => producto.id !== id)
    setCart(productosFiltrados);
}

    const isInCart=(productos)=>{
      return cart.find (elemento=>elemento.id===productos.id)
    }
  return (
 <Shop.Provider value={{estadoA, setEstadoA, addItem, removeItem, cart}}>
   {children}
 </Shop.Provider>
  )
}

export default ShopProvider 