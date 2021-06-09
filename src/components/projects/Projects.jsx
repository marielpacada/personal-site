import React from "react";
import BodyCard from "../BodyCard";
import ProjectCard from "./ProjectCard";
import projects from "../content/projects";

const myProjects = projects.map((prj) => {
    return (
        <ProjectCard
            title={prj.title}
            emoji={prj.emoji}
            tags={prj.tags}
            key={prj.key}
        />
    );
});


function Projects() {
    return (
        <div>
            <BodyCard greeting="here's some stuff i've made!" html={myProjects} />
        </div>
    );
}

export default Projects;