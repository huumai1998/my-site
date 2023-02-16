import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="contact" id="contact" data-aos="zoom-in-down">
        <div className="container">
          <div className="title-container">
            <div className="title">
              <h1>Contact</h1>
            </div>
          </div>

          <div className="to-make-a-container-size">
            <div className="contact-box">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/huu-mai-283b1216b/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="white"
                    width="50px"
                    height="50px"
                  />{" "}
                  Linkedin
                </a>
              </div>
            </div>

            <div className="contact-box">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/huu-mai-283b1216b/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="white"
                    width="50px"
                    height="50px"
                  />{" "}
                  Facebook
                </a>
              </div>
            </div>

            <div className="contact-box">
              <div className="box">
                <a href="mailto:huumai0918@gmail.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="white"
                    width="50px"
                    height="50px"
                  />{" "}
                  huumai0918@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-box">
              <div className="box">
                <a href="tel:+14039737318" target="_blank">
                  <FontAwesomeIcon
                    icon={faPhone}
                    color="white"
                    width="50px"
                    height="50px"
                  />{" "}
                  (403) 973-7318
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="final">
          <div className="left">
            <p>© Huu Mai. All Rights Reserved.</p>
          </div>

          <div className="right">
            <a
              href="https://www.linkedin.com/in/huu-mai-283b1216b/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                width="50px"
                height="50px"
              />{" "}
            </a>

            <a
              href="https://www.linkedin.com/in/huu-mai-283b1216b/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                width="20px"
                height="50px"
              />{" "}
            </a>

            <a href="mailto:huumai0918@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                width="50px"
                height="50px"
              />{" "}
            </a>

            <a href="tel:+14039737318" target="_blank">
              <FontAwesomeIcon
                icon={faPhone}
                color="white"
                width="20px"
                height="50px"
              />{" "}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
