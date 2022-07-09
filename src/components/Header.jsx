import React, { useState } from "react";

import logo from '../assets/logo.png'

const Header = ({ name }) => {
    const [current, setCurrent] = useState(name);
    console.log(current)
    
    return (
        <header className="p-3 d-flex align-items-center flex-row justify-content-between">
            <img src={logo} alt="logo" style={{width: 200+"px"}}/>
            <ul className="d-flex flex-row">
                <li className={current == "/" ? "text-danger list-unstyled text-decoration-underline p-3 cursor-pointer": "text-danger list-unstyled p-3 cursor-pointer"} onClick={() => window.location.href = '/'} style={{fontSize: 20+"px"}}>
                    Accueil
                </li>
                <li className={current == "/About" ? "text-danger list-unstyled text-decoration-underline p-3 cursor-pointer": "text-danger list-unstyled p-3 cursor-pointer"} onClick={() => window.location.href = '/About'} style={{fontSize: 20+"px"}}>
                    A propos
                </li>
            </ul>
        </header>
    )
};

export default props => <Header {...props} />;