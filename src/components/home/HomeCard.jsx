import React from "react";
import Typewriter from "typewriter-effect";

function HomeCard() {
  return (
    <div className="home-card my-col top-left-align">
      <div className="home-top my-col center-align">
        <div className="typewriter my-col center-align">
          <div className="type-head">
            <Typewriter
              options={{ delay: 100 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("hey, my name is ...")
                  .pauseFor(1500)
                  .deleteChars(3)
                  .typeString(" ariel?")
                  .pauseFor(1800)
                  .deleteChars(6)
                  .typeString("mariel!");
                typewriter.start();
              }}
            />
          </div>
          <div className="type-subhead">
            <Typewriter
              options={{ cursor: "", delay: 20 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .typeString("like the little mermaid")
                  .pauseFor(2400)
                  .typeString(' with an "m" before.');
                typewriter.start();
              }}
            />
          </div>
        </div>
        <img
          src="images/favicon.png"
          alt="a fuschia daisy"
          className="flower-symbol"
        />
      </div>

      <div className="home-bottom my-row center-align">
        <div className="byline">
          <p>
            swe @{" "}
            <a href="https://forio.com/" target="_blank" rel="noreferrer">
              forio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
