import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButton(props) {
    return (
        <div className="nav-button my-row start-center-align">
            <NavLink exact className="nav-link" activeClassName="current-tab" to={"/".concat(props.tabName)} id={props.tabName} />
            <div className="nav-button-overlay"></div>
            <div className="tab-icon"><i className={"fas fa-".concat(props.iconName)} /></div>
            <div className="tab-name my-row center-align"><p className="tab-name">{props.tabName}</p></div>
        </div>
    );
}

export default NavButton;