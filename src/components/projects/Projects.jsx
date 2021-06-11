import React from "react";
import BodyCard from "../BodyCard";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import projects from "../content/projects";

const myProjects =
    <>
        <div className="project-tag-div">
            <ProjectTag tag="product" color="#7E678E" />
            <ProjectTag tag="development" color="#486C99" />
            <ProjectTag tag="design" color="#DF8453" />
            <ProjectTag tag="machine learning" color="#E56B6F" />
            <ProjectTag tag="data analysis" color="#4E7E75" />
        </div>
        <div className="project-body my-row even-space-align">
            {projects.map((prj) => {
                return (
                    <ProjectCard
                        title={prj.title}
                        emoji={prj.emoji}
                        color={prj.color}
                        tags={prj.tags}
                        key={prj.key}
                        url={prj.url}
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