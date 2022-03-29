import React from 'react'

import { signout } from '../logic/User';

import Carrito from '../images/carrito.png';

import { useSelector } from 'react-redux';

import {
    Link
  } from "react-router-dom";

import './header.scss';

const Header = () => {
    const isLogged = useSelector(state => state.user ? state.user.logged : false);
    const user = useSelector(state => state.user ? state.user.user : false);

    const logout = async (event) => {
        event.preventDefault();
        await signout()
    }

    return(
        <div>
            <div className="headerPages">
                <ul className="headerUl">
                    {isLogged && (<li className="headerLi">
                        <Link to="/" className="title">Home</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/contact" className="title">Contact</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/about" className="title">About</Link>
                    </li>)}
                    <li className="headerLi">
                        <Link to="/cheesecake" className="title">Tarta de Queso</Link>
                    </li>
                    {isLogged && (<li className="headerLi">
                            <Link to="/cocktail" className="title">Cocktail</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/login" className="title">Login</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/register" className="title">Register</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/profile" className="title">{ user }</Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/cart" className="title"><img className="iconCart" src={Carrito} alt="cart icon" /></Link>
                    </li>)}
                    {isLogged && (<li className="headerLi">
                        <Link to="/login" className="title" onClick={logout}>Logout</Link>                    
                    </li>)}                
                </ul>
            </div>
        </div>
    )
}

export default Header;