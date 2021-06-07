import React from "react";


function BodyCard(props) {
    return (
        <div className="body-card my-col-start">
            <div className="body-heading">
                <p>{props.greeting}</p>
            </div>

            <div className="body-content">
                {props.html}
            </div>


        </div>
    );
}

export default BodyCard;