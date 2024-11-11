import React from "react";
import NavButton from "./NavButton";
import NavPortrait from "./NavPortrait";

function Sidebar() {
  return (
    <>
      <div className="sidebar my-col start-center-align">
        <NavPortrait />
        <NavButton iconName="user-circle" tabName="about" />
        <NavButton iconName="laptop-code" tabName="projects" />
        <NavButton iconName="comment-dots" tabName="musings" />
        <NavButton iconName="id-card" tabName="contact" />
      </div>
      <div className="footer">© 2024 mariel pacada</div>
    </>
  );
}

export default Sidebar;
