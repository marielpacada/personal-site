import React from "react";
import BodyCard from "../BodyCard";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import projects from "../content/projects";

const myProjects =
    <>
        <div className="project-tag-div">
            <ProjectTag tag="product" />
            <ProjectTag tag="development" />
            <ProjectTag tag="design" />
            <ProjectTag tag="machine learning" />
            <ProjectTag tag="data analysis" />
        </div>
        <div className="content-body my-row even-space-align">
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