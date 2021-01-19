import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NaviLinks.css';

const NaviLinks = props => {
    const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Visi lietotāji</NavLink>
        </li>
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/u1/places">Manas vietas</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/places/new">Jauna vieta</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
            <NavLink to="/auth">Autorizācija</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
            <li>
                <button onClick={auth.logout}>Iziet</button>
            </li>
        )}
    </ul>
};

export default NaviLinks;