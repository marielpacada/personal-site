import React from "react";
import MusingFile from "./MusingFile";
import musings from "../content/musings";


function MusingFolderView(props) {
    return (
        <div className="note-folder">
            {musings.map((note) => {
                return (
                    <MusingFile
                        key={note.key}
                        title={note.title}
                        date={note.date}
                        subheading={note.subheading}
                    />
                );
            })}
        </div>



    );
}


export default MusingFolderView;