import React from "react";
import { useHistory } from "react-router-dom";

function NavPortrait() {
    const history = useHistory();
    return (
        <img
            src="images/memoji/m1.png"
            alt="mariel's apple memoji"
            className="portrait"
            onMouseOver={e => (e.currentTarget.src = "images/memoji/m2.png")}
            onMouseOut={e => (e.currentTarget.src = "images/memoji/m1.png")}
            onClick={() => history.push('/')}
        />
    );
}

export default NavPortrait;