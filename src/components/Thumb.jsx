import React from "react";

const Thumb = ({ data }) => {

    const redirect = () => {
        window.location.href = "/Habitation?id="+data.id
    } 
    
    return (
        <article className="rounded text-white bg-danger d-flex align-items-end m-4" onClick={redirect} style={{backgroundImage: "linear-gradient(to top, rgb(0 0 0 / 68%), rgba(255, 255, 255, 0)), url("+data.cover+")", width: 350+"px", height: 350+"px", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <h4 className="p-2">
                {data.location}
            </h4>
        </article>
    )
};

export default props => <Thumb {...props} />;