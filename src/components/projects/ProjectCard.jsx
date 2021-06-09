import React from "react";
import ProjectTag from "./ProjectTag";

function ProjectCard(props) {
    return (
        <div className="project-card my-col">
            <div className="project-title my-row start-center-align">{props.title}</div>
            <div className="project-cover my-row even-space-align">
                <p>{props.emoji}</p>
                <div className="project-tag-div my-col even-space-align">
                    {props.tags && (props.tags).map((tag, index) => {
                        return (
                            <ProjectTag
                                category={tag.split(" ")[0]}
                                tag={tag}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;