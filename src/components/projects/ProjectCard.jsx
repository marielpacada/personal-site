import React from "react";
import ProjectTag from "./ProjectTag";

function ProjectCard(props) {
    return (
        <div className="project-card my-col">
            <div className="project-title my-row start-center-align">{props.title}</div>
            <div className="project-cover my-row even-space-align" my-color={props.color}>
                <div className="project-emoji-div my-row center-align">{props.emoji}</div>
                <div className="project-tag-div my-col top-left-align">
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