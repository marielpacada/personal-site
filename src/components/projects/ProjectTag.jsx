import React from "react";

function ProjectTag(props) {
    return (
        <div className="project-tag" style={{backgroundColor: props.color}}> 
            {props.tag}
        </div>
    );
}

export default ProjectTag;