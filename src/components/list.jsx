import React, { useState } from "react";
import Up from "../assets/arrow-up.svg"

const List = ({ title, data }) => {

    const [hidden, setHidden] = useState(false);
    console.log(typeof data)
    const toggleList = () => {
        setHidden(!hidden)
    } 

    return (
        <div className="rounded bg-info">
            <div className="bg-danger rounded text-whit p-2 text-white d-flex flex-row align-items-center justify-content-between">
                <div>
                    {title}
                </div>
                <img src={Up} alt="arrow-up" className="cursor-pointer" style={{transform: hidden ? "rotate(180deg)":null}} onClick={toggleList}/>
            </div>
            {!hidden ?
                <div className="text-danger p-2">
                    {typeof data === "object" ?
                        data.map(equipement => {
                            return(
                                <div>
                                    {equipement}
                                </div>
                            )
                        }) : 
                        <div>
                            {data}
                        </div>
                    }
                </div>:null
            }
        </div>
    )
};

export default props => <List {...props} />;