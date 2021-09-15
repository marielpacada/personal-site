import React from 'react';
import BodyCard from "../BodyCard";
import MusingFile from './MusingFile';
import musings from "../content/musings";
import MusingContent from './MusingContent';


const myMusings =
    <>
        <div className="content-body my-row center-align">
            <div className="note-app my-row start-align">
                <div className="note-file-div my-col start-align">
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

                <div className="note-content-div">
                    {musings.map((note) => {
                        return (
                            <MusingContent text={note.text} />
                        );
                    })}
                </div>
            </div>
        </div>
    </>

function Musings() {
    return (
        <div>
            <BodyCard greeting="a penny for my thoughts?" html={myMusings} />
        </div>
    );
}

export default Musings;