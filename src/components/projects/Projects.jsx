import React from "react";
import BodyCard from "../BodyCard";
import myProjects from "../content/projects";

// THIS FILE SHOULD CONTAIN THE HTML PROP AS A VARIABLE
// THAT VARIABLE WILL CONTAIN FUCNTION THAT USES MAP FUNCTION TO TARGET ALL THE ITEMS IN PROJECTS.JS

function Projects() {
    return (
        <div>
            <BodyCard greeting="here's some stuff i've made!" html={myProjects}/>
        </div>
    );
}

export default Projects;