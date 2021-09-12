import React from "react";
import BodyCard from "../BodyCard";
import ContactIcon from "./ContactIcon";
import contactLinks from "../content/contact";

const myContactLinks =
    <>
        <div className="my-row even-space-align">
            {contactLinks.map((contact) => {
                return (
                    <ContactIcon
                        icon={contact.icon}
                        title={contact.title}
                        iconColor={contact.iconColor}
                        color={contact.color}
                        key={contact.key}
                        url={contact.url}
                    />
                )
            })}
        </div>
    </>



function About() {
    return (
        <div>
            <BodyCard greeting="let's connect!" html={myContactLinks} />
        </div>
    );
}

export default About;