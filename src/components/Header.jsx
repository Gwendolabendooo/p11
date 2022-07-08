import React from "react";
import logo from '../assets/logo.png'

const Header = ({ name }) => {
    return (
        <header className="p-3 d-flex align-items-center flex-row justify-content-between">
            <img src={logo} alt="logo" style={{width: 200+"px"}}/>
            <ul className="d-flex flex-row">
                <li className="text-danger list-unstyled text-decoration-underline p-3 cursor-pointer" onClick={() => window.location.href = '/Accueil'} style={{fontSize: 20+"px"}}>
                    Accueil
                </li>
                <li className="text-danger list-unstyled p-3 cursor-pointer" onClick={() => window.location.href = '/A propos'} style={{fontSize: 20+"px"}}>
                    A propos
                </li>
            </ul>
        </header>
    )
};

export default props => <Header {...props} />;