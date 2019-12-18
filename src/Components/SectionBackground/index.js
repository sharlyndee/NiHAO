import React from "react";
import "./module.style.css";

const SectionBG = props => {
    return (
        <div className="bghome">
            {props.children}
        </div>
    );
};
export default SectionBG;
