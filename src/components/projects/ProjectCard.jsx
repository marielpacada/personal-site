import React from "react";


// you would put code for tag circles here! in the project-title -- 
// make it contain div of title text and then div of the circles :)


function ProjectCard(props) {
    return (
        <div className="project-card my-col" url={props.url}>
            <div className="project-title my-row start-center-align">{props.title}</div>
            <div className="project-cover my-row center-align" my-color={props.color}>{props.emoji}</div>
        </div>
    );
}

export default ProjectCard;