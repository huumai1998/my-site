import React from "react";
import { html } from "../assets";

export const Skills = () => {
  return (
    <section className="main-containers" id="skills" data-aos="zoom-in">
      <div className="skills-container">
        <div className="container">
          <div className="title">
            <h1>SKILLS</h1>
          </div>

          <div className="pics-container">
            <div className="pics-box">
              <div className="top-box" data-aos="zoom-in-up">
                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">HTML</p>
                </div>

                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">CSS/SCSS</p>
                </div>

                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">RUBY</p>
                </div>

                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">React JS</p>
                </div>
              </div>

              <div className="bottom-box" data-aos="zoom-in-up">
                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">Node/ExpressJS</p>
                </div>

                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">MongoDB</p>
                </div>

                <div className="pics">
                  <img src={html} alt="html" width="150px" height="150px" />
                  <p className="bold">Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
