import React from "react";
import NavButton from "./NavButton";

function Sidebar() {
    return <div className="my-col-start sidebar">
    <NavButton iconName="user-circle" tabName="about"/>
    <NavButton iconName="laptop-code" tabName="projects"/>
    <NavButton iconName="comment-dots" tabName="musings"/>
    <NavButton iconName="id-card" tabName="contact"/>
    </div>;

}

export default Sidebar;