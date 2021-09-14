import React from "react";
import MusingFolder from "./MusingFolder";
import MusingPiece from "./MusingPiece";

function MusingContainer(props) {
    return (
        <div className="note-app my-row start-align">
            <MusingFolder />
            <MusingPiece />
        </div>



    );
}


export default MusingContainer;