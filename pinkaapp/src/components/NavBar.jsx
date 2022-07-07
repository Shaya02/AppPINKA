import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar= () => {
return (
    <header>
<ul className='nav'>
<li>PINKA</li>
<li> <Link to= '/'>Inicio</Link></li>
<li> <Link to= '/category/cakes'> Cakes </Link></li>
<li> <Link to= '/category/cookies'> Cookies </Link></li>

<CartWidget/>
</ul>
</header>
)
}
export default NavBar