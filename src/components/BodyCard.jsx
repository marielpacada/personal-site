import React from "react";


function BodyCard(props) {
    return (
        <div className="body-card">
            <div className="body-heading">
                <p>{props.greeting}</p>
            </div>

            <div className="body-content">
                <p>{props.text}</p>
            </div>

        </div>
    );
}

export default BodyCard;