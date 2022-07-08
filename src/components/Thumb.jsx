import React from "react";

const Thumb = ({ name, data }) => {
    return (
        <article className="rounded text-white bg-danger d-flex align-items-end" style={{backgroundImage: "linear-gradient(to top, rgb(0 0 0 / 68%), rgba(255, 255, 255, 0)), url("+data.cover+")", width: 350+"px", height: 350+"px", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <h4 className="p-2">
                {name}
            </h4>
        </article>
    )
};

export default props => <Thumb {...props} />;