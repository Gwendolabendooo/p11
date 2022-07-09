import React, { useState } from "react";

import Branding from '../assets/branding.png'

import Header from '../components/Header'
import Thumb from '../components/Thumb'

const Home = ({ data }) => {

    return (
        <div>
            <Header></Header>
            <div className="rounded-3 overflow-hidden position-relative" style={{height: 200+"px", marginTop: 40+"px", marginBottom: 40+"px"}}>
                <img src={Branding} className="w-100 h-100" alt="" style={{objectFit: "cover"}} />
                <div className="w-100 h-100 position-absolute place-center" style={{left: 50+"%", top: 50+"%", backgroundColor: "rgb(0 0 0 / 44%)"}}>

                </div>
                <h2 className="position-absolute place-center text-white" style={{left: 50+"%", top: 50+"%"}}>
                    Chez vous, partout et ailleurs
                </h2>
            </div>
            <div className="rounded bg-info d-flex flex-wrap">
                {
                    data.map(logement => {
                        return(
                            <Thumb data={logement}></Thumb>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default props => <Home {...props} />;