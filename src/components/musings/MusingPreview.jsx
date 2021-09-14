import React from "react";

function MusingPreview(props) {
    return (
        <div className="note-file my-col start-align">
            <div className="file-title">
                {props.title}
            </div>
            <div className="file-date">
                {props.date}
            </div>
            <div className="file-subheading">
                {props.subheading}
            </div>
        </div>
    );
}

export default MusingPreview;