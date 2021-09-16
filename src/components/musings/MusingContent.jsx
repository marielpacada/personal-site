import React from "react";

function MusingContent(props) {
    return (
        <div className="note-content hidden" id={"content-".concat(props.id)}>
            {props.text}
        </div>
    );
}

export default MusingContent;
