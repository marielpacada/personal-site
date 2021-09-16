import React from "react";

function ContactIcon(props) {
    return (
        <div className="content-body my-col center-align">
            <div className="contact-icon my-col center-align" url={props.url} style={{ backgroundColor: props.color }}>
                <i className={props.icon.concat(" fa-4x")} style={{ color: props.iconColor }} />
            </div>
            <div className="contact-title">
                {props.title}
            </div>
        </div>
    );
}

export default ContactIcon;