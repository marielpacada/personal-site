import React from "react";
import BodyCard from "../BodyCard";
import aboutMeText from "../content/about";

function About() {
    return (
        <div>
            <BodyCard greeting="nice to meet you!" html={aboutMeText} />
        </div>
    );
}

export default About;