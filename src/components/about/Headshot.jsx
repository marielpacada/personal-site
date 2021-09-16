import React from "react";

function Headshot() {
    return (
        <div className="headshot">
            <img className="headshot-under" src={process.env.PUBLIC_URL + '/images/head-under.jpg'} alt="heart, mariel pacada" />
            <img className="headshot-img" src={process.env.PUBLIC_URL + '/images/head.jpg'} alt="mariel in a field of yellow flowers" />
        </div>
    );
}

export default Headshot;