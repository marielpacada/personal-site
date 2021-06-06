import React from "react";
import Typewriter from 'typewriter-effect';

function HomeCard(props) {
    return (
        <div className="home">

            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello World!')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />

        </div>
    );
}

export default HomeCard;

