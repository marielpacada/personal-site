import React from "react";
import Typewriter from 'typewriter-effect';

function HomeCard(props) {
    return (
        <div className="home">
            <div className="typewriter">
                <div className="type-head">
                    <Typewriter
                        options={{ delay: 100 }}
                        onInit={(typewriter) => {
                            typewriter.start()
                                .typeString("hey, my name is ...")
                                .pauseFor(1500)
                                .deleteChars(3)
                                .typeString(" ariel?")
                                .pauseFor(1800)
                                .deleteChars(6)
                                .typeString("mariel!");
                        }}
                    />
                </div>
                <div className="type-subhead">
                    <Typewriter
                        options={{ cursor: '', delay: 20 }}
                        onInit={(typewriter) => {
                            typewriter.start()
                                .pauseFor(2500)
                                .typeString("like the little mermaid")
                                .pauseFor(2500)
                                .typeString(' with an "m" before.')
                        }}
                    />

                </div>

            </div>


        </div>
    );
}

export default HomeCard;

