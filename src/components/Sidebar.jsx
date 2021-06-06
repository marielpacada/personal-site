import React from "react";
import NavButton from "./NavButton";

function Sidebar() {
    return <div className="my-col-start sidebar">
    <NavButton icon="fas fa-user-circle" tabName="about"/>
    <NavButton icon="fas fa-laptop-code" tabName="projects"/>
    <NavButton icon="fas fa-comment-dots" tabName="musings"/>
    <NavButton icon="fas fa-id-card" tabName="contact"/>
    </div>;

}

export default Sidebar;