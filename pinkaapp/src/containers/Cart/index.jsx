import React, {useContext} from 'react'
import { Shop } from '../../Context/ShopProvider';
import ordenGenerada from '../../FuncionesUtilitarias/ordenGenerada';
import guardarOrden from '../../FuncionesUtilitarias/ordenGenerada';




const Cart = () => {
  const {cart} = useContext(Shop);


const confirmarOrden= async() =>{
  const orden= ordenGenerada("Shaya", "Uruguay", cart,2500);
  guardarOrden(cart, orden)



//const docRef = await addDoc(collection(db, "orders"), orden);
//console.log("Document written with ID: ", docRef.id);

}

  return ( 
    <>
    <ul>
      {cart.map(productos => {
        return <li key={productos.id}>
         <h3> {productos.nombre} </h3>
          <img src={productos.imagen} width='80px' alt={productos.nombre}/> 
          </li>
      })}
    </ul>
    <button onClick={confirmarOrden}> Confirmar compra </button>
    </>
  )}
  
export default Cart 
   
