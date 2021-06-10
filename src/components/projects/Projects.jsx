import React from "react";
import BodyCard from "../BodyCard";
import ProjectCard from "./ProjectCard";
import projects from "../content/projects";

const myProjects =
    <>
        <div className="project-body my-row even-space-align">
            {projects.map((prj) => {
                return (
                    <ProjectCard
                        title={prj.title}
                        emoji={prj.emoji}
                        color={prj.color}
                        tags={prj.tags}
                        key={prj.key}
                    />
                )
            })}
        </div>
    </>;

function Projects() {
    return (
        <div>
            <BodyCard greeting="here's some stuff i've made!" html={myProjects} />
        </div>
    );
}

export default Projects;