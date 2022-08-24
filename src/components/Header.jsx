import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/logo.png'

const Header = ({ name }) => {
    const [current, setCurrent] = useState(name);
    
    return (
        <header className="d-flex align-items-center flex-row justify-content-between" style={{padding: 1+"rem"}}>
            <img src={logo} alt="logo" className="logo" style={{width: 200+"px"}}/>
            <ul className="d-flex flex-row">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-danger list-unstyled text-decoration-underline cursor-pointer": "text-danger list-unstyled cursor-pointer"}>
                    <li style={{fontSize: 20+"px", padding: 1+"rem"}}>
                        Accueil
                    </li>
                </NavLink>
                <NavLink to="/About" className={({ isActive }) => isActive ? "text-danger list-unstyled text-decoration-underline cursor-pointer": "text-danger list-unstyled cursor-pointer"}>
                    <li style={{fontSize: 20+"px", padding: 1+"rem"}}>
                        A propos
                    </li>
                </NavLink>
            </ul>
        </header>
    )
};

export default props => <Header {...props} />;