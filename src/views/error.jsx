import React, { useState } from "react";

import Header from '../components/Header'

import errorSvg from '../assets/404.svg'

const Error = ({ data }) => {

    return (
        <div className="margin" style={{height: 100+"vh"}}>
            <Header></Header>
            <div className="d-flex align-items-center flex-column m-5 h-50 justify-content-center">
                <img src={errorSvg} className="errorSvg" alt="" />
                <div className="text-danger p-4 text-center errorMsg" style={{fontSize: 26+"px"}}>
                    Oups! La page que vous demandez n'existe pas.
                </div>
            </div>
            <div className="text-center">
                <a href="/" className="text-danger">Retourner sur la page d'accueil</a>
            </div>
        </div>
    )
};

export default props => <Error {...props} />;