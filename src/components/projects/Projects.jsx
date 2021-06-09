import React from "react";
import BodyCard from "../BodyCard";
import ProjectCard from "./ProjectCard";
import projects from "../content/projects";

// THIS FILE SHOULD CONTAIN THE HTML PROP AS A VARIABLE
// THAT VARIABLE WILL CONTAIN FUCNTION THAT USES MAP FUNCTION TO TARGET ALL THE ITEMS IN PROJECTS.JS

const myProjects = projects.map((prj) => {
    return (
        <ProjectCard title={prj.title} emoji={prj.emoji} key={prj.key} tags={prj.tags} />
    )
});


function Projects() {
    return (
        <div>
            <BodyCard greeting="here's some stuff i've made!" html={myProjects} />
        </div>
    );
}

export default Projects;