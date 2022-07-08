import React, { useState } from "react";
import Up from "../assets/arrow-up.svg"

const List = ({ name, data }) => {

    const [hidden, setHidden] = useState(true);

    const toggleList = () => {
        setHidden(!hidden)
    } 

    return (
        <div className="rounded bg-info">
            <div className="bg-danger rounded text-whit p-2 text-white d-flex flex-row align-items-center justify-content-between">
                <div>
                    Equipements
                </div>
                <img src={Up} alt="arrow-up" className="cursor-pointer" style={{transform: hidden ? "rotate(180deg)":null}} onClick={toggleList}/>
            </div>
            {!hidden ?
                <div className="text-danger p-2">
                    fsdefs
                </div>:null
            }
        </div>
    )
};

export default props => <List {...props} />;