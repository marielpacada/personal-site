import React from "react";

function ProjectCard() {
    return (
        <div className="project-card">
            <img className="project-img" src={process.env.PUBLIC_URL + '/images/head.jpg'} alt="heart, mariel pacada" />
            <div className="project-desc"></div>
        </div>
    );
}

export default ProjectCard;