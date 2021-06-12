import React from "react";
import ProjectDot from "./ProjectDot";

function ProjectCard(props) {
    return (
        <div className="project-card my-col" url={props.url}>
            <div className="project-title-div my-row space-between-align">
                <div className="project-title my-row start-center-align">
                    {props.title}
                </div>
                <div className="project-dot-div my-row">
                    {props.tags.map((tag, index) => { return (<ProjectDot tagName={tag} key={index} />); })}
                </div>
            </div>
            <div className="project-cover my-row center-align" my-color={props.color}>{props.emoji}</div>
        </div>
    );
}

export default ProjectCard;