import React from "react";
import BodyCard from "../BodyCard";
import aboutMe from "../content/about";

function About() {
    return (
        <div>
            <BodyCard greeting="nice to meet you!" html={aboutMe} />
        </div>
    );
}

export default About;