import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar= () => {
return (
    <header>
<ul className='nav'>
<li>PINKA</li>
<li> <a href="/index.html">Inicio</a></li>
<li><a href="./contacto.html">Contacto</a></li>
<CartWidget/>
</ul>
</header>
)
}
export default NavBar