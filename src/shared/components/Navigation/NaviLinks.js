import React from 'react';
import { NavLink } from 'react-router-dom';
import './NaviLinks.css';

const NaviLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Visi lietotāji</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">Manas vietas</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Jauna vieta</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Autorizācija</NavLink>
        </li>
    </ul>
};

export default NaviLinks;