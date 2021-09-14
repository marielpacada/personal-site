import React from 'react';
import BodyCard from "../BodyCard";
import MusingFolderView from './MusingFolderView';
import MusingContentView from './MusingContentView';

const myMusings =
    <>
        <div className="content-body my-row center-align">
            <div className="note-app my-row start-align">
                <MusingFolderView />
                <MusingContentView />
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