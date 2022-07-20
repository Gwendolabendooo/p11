import React, { useState } from "react";

import logo from '../assets/logo.png'

const Header = ({ name }) => {
    const [current, setCurrent] = useState(name);
    console.log(current)
    
    return (
        <header className="d-flex align-items-center flex-row justify-content-between" style={{padding: 1+"rem"}}>
            <img src={logo} alt="logo" className="logo" style={{width: 200+"px"}}/>
            <ul className="d-flex flex-row">
                <li className={current == "/" ? "text-danger list-unstyled text-decoration-underline cursor-pointer": "text-danger list-unstyled cursor-pointer"} onClick={() => window.location.href = '/'} style={{fontSize: 20+"px", padding: 1+"rem"}}>
                    Accueil
                </li>
                <li className={current == "/About" ? "text-danger list-unstyled text-decoration-underline cursor-pointer": "text-danger list-unstyled cursor-pointer"} onClick={() => window.location.href = '/About'} style={{fontSize: 20+"px", padding: 1+"rem"}}>
                    A propos
                </li>
            </ul>
        </header>
    )
};

export default props => <Header {...props} />;