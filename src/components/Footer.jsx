import React from "react";
import logo from '../assets/logoWhite.svg'

const Footer = ({ name }) => {
    return (
        <footer className="p-5 bg-black d-flex align-items-center justify-content-around flex-column" style={{marginTop: 30+"px"}}>
            <img src={logo} alt="logo" style={{width: 200+"px"}}/>
            <div className="text-white mt-4">
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    )
};

export default props => <Footer {...props} />;