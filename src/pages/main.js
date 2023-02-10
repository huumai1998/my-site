import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Main = () => {
  return (
    <section className="main-containers">
      <div className="m-pages">
        <div className="m-container m-box">
          <div className="m-name">
            <h1>
              Hya, <br />
              welcome to my page!
            </h1>
          </div>

          <div className="text-title">
            <p>
              I am Full-Stack developer with entry-level of experience in web
              designing and development.
              <Typewriter
                cursor
                typeSpeed={5}
                cursorStyle="_"
                words={[]}
              ></Typewriter>
            </p>
          </div>
          <div className="i-social-media">
            <div className="i-social-list">
              <a href="https://github.com/huumai1998" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/huu-mai-283b1216b/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
