import React from "react";
import { NavLink } from "react-router-dom";

const Thumb = ({ data }) => {
    
    return (
        <NavLink to={"/Habitation?id="+data.id} className="rounded text-white bg-danger mb-4 d-flex align-items-end cursor-pointer thumb" style={{backgroundImage: "linear-gradient(to top, rgb(0 0 0 / 68%), rgba(255, 255, 255, 0)), url("+data.cover+")", width: 30+"%", height: 350+"px", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <h4 className="p-2">
                {data.location}
            </h4>
        </NavLink>
    )
};

export default props => <Thumb {...props} />;