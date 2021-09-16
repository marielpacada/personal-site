import React from "react";

function MusingContent(props) {
    return (
        <div className="my-col note-content hidden" id={"content-".concat(props.id)}>
            <div className="content-title">{props.title}</div>
            <div>{props.text}</div>
        </div>
    );
}

export default MusingContent;
