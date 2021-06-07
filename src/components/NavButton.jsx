import React from 'react';

function NavButton(props) {
    return (
        <div className="my-row-start nav-button">
            <div className="nav-button-overlay"></div>
            <div className="tab-icon"><i className={"fas fa-".concat(props.iconName)} /></div>
            <div className="my-row-center"><p>{props.tabName}</p></div>
        </div>
    );
}

export default NavButton;