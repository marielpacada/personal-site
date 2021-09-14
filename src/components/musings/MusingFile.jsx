import React from "react";
import MusingPreview from "./MusingPreview";

function MusingFile(props) {
    return (
        <MusingPreview
            title={props.title}
            date={props.date}
            subheading={props.subheading}
        />
    );
}


export default MusingFile;