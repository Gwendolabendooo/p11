import React, { useState } from "react";

import Branding from '../assets/branding.png'

import Header from '../components/Header'
import Thumb from '../components/Thumb'
import Footer from '../components/Footer'


const Home = ({ data }) => {

    return (
        <div>
            <div className="margin">
                <Header name="/"></Header>
                <div className="rounded-3 overflow-hidden position-relative branding" style={{height: 200+"px", marginTop: 40+"px", marginBottom: 40+"px"}}>
                    <img src={Branding} className="w-100 h-100" alt="" style={{objectFit: "cover"}} />
                    <div className="w-100 h-100 position-absolute place-center" style={{left: 50+"%", top: 50+"%", backgroundColor: "rgb(0 0 0 / 44%)"}}>

                    </div>
                    <h2 className="position-absolute place-center text-white" style={{left: 50+"%", top: 50+"%"}}>
                        Chez vous, partout et ailleurs
                    </h2>
                </div>
                <div className="rounded bg-info d-flex flex-wrap p-3 ctn-thumb" style={{gap: 5+"%"}}>
                    {
                        data.map(logement => {
                            return(
                                <Thumb data={logement} key={logement.id}></Thumb>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default props => <Home {...props} />;