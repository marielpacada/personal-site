import React from "react";
import { NavLink } from 'react-router-dom';

function NavPortrait() {
    return <div className="portrait my-row center-align">
        <NavLink exact className="nav-link" to="/" />
        <img src="images/nav-head.png" alt="portrait by iman" className="nav-img" />
    </div>;
}

export default NavPortrait;