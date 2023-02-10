import React from "react";
import { css, html, java, mongoo, node, react, ruby } from "../assets";

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
                  <img src={html} alt="html" />
                  <p className="bold">HTML</p>
                </div>

                <div className="pics">
                  <img src={css} alt="css" />
                  <p className="bold">CSS/SCSS</p>
                </div>

                <div className="pics">
                  <img src={ruby} alt="ruby" />
                  <p className="bold">RUBY</p>
                </div>

                <div className="pics">
                  <img src={react} alt="react" />
                  <p className="bold">React JS</p>
                </div>
              </div>

              <div className="bottom-box" data-aos="zoom-in-up">
                <div className="pics">
                  <img src={node} alt="node" />
                  <p className="bold">Node/ExpressJS</p>
                </div>

                <div className="pics">
                  <img src={mongoo} alt="mongoo" />
                  <p className="bold">MongoDB</p>
                </div>

                <div className="pics">
                  <img src={java} alt="java" />
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
