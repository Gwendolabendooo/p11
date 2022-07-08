import React from "react";

const Tag = ({ name }) => {
    return <div className="bg-danger text-white rounded-pill text-center p-1" style={{width: 'fit-content', fontSize: 16+"px", width: 130+"px", fontWeight: 500}}>{ name }</div>;
};

export default props => <Tag {...props} />;