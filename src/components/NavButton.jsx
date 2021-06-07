import React from 'react';

function NavButton(props) {
    return (
        <div className="my-row start-center-align nav-button">
            <div className="nav-button-overlay"></div>
            <div className="tab-icon"><i className={"fas fa-".concat(props.iconName)} /></div>
            <div className="tab-name my-row center-align"><p className="tab-name">{props.tabName}</p></div>
        </div>
    );
}

export default NavButton;