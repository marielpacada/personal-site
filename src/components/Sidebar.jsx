import React from "react";
import NavButton from "./NavButton";
import NavPortrait from "./NavPortrait";

function Sidebar() {
    return (
        <div className="my-col start-center-align sidebar">
            <NavPortrait />
            <NavButton iconName="user-circle" tabName="about" />
            <NavButton iconName="laptop-code" tabName="projects" />
            <NavButton iconName="comment-dots" tabName="musings" />
            <NavButton iconName="id-card" tabName="contact" />
        </div>
    );
}

export default Sidebar;