import React from "react";
import MusingFile from "./MusingFile";

function MusingUnit(props) {
    return (
        <MusingFile
            title={props.title}
            date={props.date}
            subheading={props.subheading}
        />
    );
}


export default MusingUnit;