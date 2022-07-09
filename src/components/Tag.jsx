import React from "react";

const Tag = ({ title }) => {
    return <div className="bg-danger text-white rounded-pill text-center p-1 text-truncate" style={{width: 'fit-content', fontSize: 16+"px", width: 130+"px", fontWeight: 500, marginRight: 20+"px", marginTop: 20+"px"}}>{ title }</div>;
};

export default props => <Tag {...props} />;