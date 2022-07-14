import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import {Shop} from '../Context/ShopProvider';

const NavBar= () => {

    const {estadoA}=useContext(Shop)
    console.log(estadoA);
return (
    <header>
<ul className='nav'>
<li>PINKA</li>
<li> <Link to= '/'>Inicio</Link></li>
<li> <Link to= '/category/cakes'> Cakes </Link></li>
<li> <Link to= '/category/cookies'> Cookies </Link></li>
<li> <a href='/#'>{estadoA}</a></li>
<CartWidget/>
</ul>
</header>
)
}
export default NavBar