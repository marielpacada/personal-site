import React from "react";

function MusingFile(props) {
    return (
        <div className="my-col start-align note-file">
            <div className="file-title">
                {props.title}
            </div>
            <div className="file-subheading">
                {props.subheading}
            </div>
        </div>



    );
}


export default MusingFile;