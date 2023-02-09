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

          <div className="">
            <img src={html} alt="html" width="150px" height="150px" />
          </div>
        </div>
      </div>
    </section>
  );
};
