import React from "react";

function MusingFile(props) {
    return (
        <div className="note-file my-col start-align" id={"file-".concat(props.id)}>
            <div className="file-title">{props.title}</div>
            <div className="file-date">{props.date}&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;{props.time}</div>
            <div className="file-subheading">{props.subheading}</div>
        </div>
    );
}

export default MusingFile;