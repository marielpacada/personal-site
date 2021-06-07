import React from "react";
import Typewriter from 'typewriter-effect';

function HomeCard(props) {
    return (
        <div className="home my-col-start">
            <div className="home-top my-col-center">
                <div className="typewriter my-col-center">
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
                                    .pauseFor(2600)
                                    .typeString("like the little mermaid")
                                    .pauseFor(2500)
                                    .typeString(' with an "m" before.')
                            }}
                        />
                    </div>
                </div>


                <img src="images/memoji.gif" alt="mariel's memoji" className="memoji" />


            </div>





            <div className="home-bottom my-row-center">
                <div className="byline">
                    <p>current: <a href="https://cs.brown.edu/">brown</a> cs + <a href="https://www.smugmug.com/">smugmug</a> front-end</p>
                </div>
            </div>






        </div>
    );
}

export default HomeCard;

