import React from "react";
import MusingFile from "./MusingFile";
import musings from "../content/musings";


function MusingFolder(props) {
    return (
        <div className="note-folder">
            {musings.map((note) => {
                return (
                    <MusingFile
                        title={note.title}
                        subheading={note.subheading}
                    />
                )
            })}
        </div>



    );
}


export default MusingFolder;