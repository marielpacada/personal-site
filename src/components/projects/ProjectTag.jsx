import React from "react";

function ProjectTag(props) {
    return (
        <div className={"project-tag ".concat(props.category)}>
            {props.tag}
        </div>
    );
}

export default ProjectTag;