import React from "react";

function Headshot() {
    return (
        <div className="headshot my-row center-align">
            <img className="headshot-under" src={process.env.PUBLIC_URL + '/images/head-under.jpg'} alt="heart, mariel pacada" />
            <img className="headshot-img-landscape" src={process.env.PUBLIC_URL + '/images/head-landscape.jpg'} alt="mariel in a field of yellow flowers" />
            <img className="headshot-img-portrait" src={process.env.PUBLIC_URL + '/images/head-portrait.png'} alt="mariel's headshot" />
        </div>
    );
}

export default Headshot;