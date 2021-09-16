import React from "react";

function ProjectTag(props) {
    return (
        <div className={"project-tag ".concat(props.tag.split()[0])}>
            {props.tag}
        </div>
    );
}

export default ProjectTag;