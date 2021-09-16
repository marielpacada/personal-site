import React from "react";

function BodyCard(props) {
    return (
        <div className="body-card my-col top-left-align">
            <p className="greeting">{props.greeting}</p>
            <div>{props.html}</div>
            <div className="whitespace"></div>
        </div>
    );
}

export default BodyCard;