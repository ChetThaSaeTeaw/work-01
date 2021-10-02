import React ,{ useState } from 'react';
import "./Navbar.css";
import BrandLogo from "../../Image/brand.png";
import { Menulist } from './Menulist';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ menuIcon , setMenuIcon ] = useState(false);
    const MenuLists = Menulist.map(({title , url} , index) => (
        <li key={index}>
            <NavLink to={url} exact activeClassName="active">{title}</NavLink>
        </li>
    ))
    return (
        <nav className="navbar-brand"> 
            <img src={BrandLogo} alt="Brand-Logo" />
            <div className="menu-icon" onClick={() => setMenuIcon(!menuIcon)}>
                { menuIcon ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i> }
            </div>
            <ul className={menuIcon ? "menu-list" : "menu-list close"}>
                {MenuLists}
            </ul>
        </nav>
    )
}

export default Navbar;
