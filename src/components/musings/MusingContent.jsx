import React from "react";

function MusingContent(props) {
    return (
        <div className="note-content hidden">
            {props.text}
        </div>
    );
}

export default MusingContent;
