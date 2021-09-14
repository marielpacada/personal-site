import React from 'react';
import BodyCard from "../BodyCard";
import MusingContainer from './MusingContainer';

const myMusings =
    <>
        <div className="content-body my-row center-align">

            <MusingContainer />
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