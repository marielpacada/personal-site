import React from "react";
import Typewriter from 'typewriter-effect';

function HomeCard() {
    return (
        <div className="home-card my-col top-left-align">
            <div className="home-top my-col center-align">
                <div className="typewriter my-col center-align">
                    <div className="type-head">
                        <Typewriter
                            options={{ delay: 100 }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("hey, my name is ...")
                                    .pauseFor(1500)
                                    .deleteChars(3)
                                    .typeString(" ariel?")
                                    .pauseFor(1800)
                                    .deleteChars(6)
                                    .typeString("mariel!")
                                    .start();
                            }}
                        />
                    </div>
                    <div className="type-subhead">
                        <Typewriter
                            options={{ cursor: '', delay: 20 }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2600)
                                    .typeString("like the little mermaid")
                                    .pauseFor(2500)
                                    .typeString(' with an "m" before.')
                                    .start();
                            }}
                        />
                    </div>
                </div>
                <img src="images/memoji/m1.png" alt="mariel's memoji" className="memoji" />
            </div>

            <div className="home-bottom my-row center-align">
                <div className="byline">
                    <p>current: <a href="https://cs.brown.edu/">brown</a> cs + <a href="https://www.smugmug.com/">smugmug</a> front-end</p>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;

