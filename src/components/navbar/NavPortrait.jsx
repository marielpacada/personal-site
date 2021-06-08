import React from "react";
import { NavLink } from 'react-router-dom';

function NavPortrait() {
    return <div className="portrait my-row center-align">
        <NavLink exact className="nav-link" activeClassName="current-tab" to="/" />
        <img src="images/pengwing.png" alt="portrait" className="nav-img" />
    </div>;
}

export default NavPortrait;