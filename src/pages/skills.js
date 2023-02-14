import React from "react";
import { css, html, java, mongoo, node, react, ruby } from "../assets";
// import { HTML } from "../components/allSVG";

export const Skills = () => {
  return (
    <>
      <section className="skills" id="skills" data-aos="zoom-in">
        <div className="container">
          <div className="title">
            <h1>SKILLS</h1>
          </div>

          <div className="skills-container" data-aos="zoom-in-up">
            <div className="skills-box">
              <img src={html} alt="html" />
              <h3>HTML</h3>
            </div>

            <div className="skills-box">
              <img src={css} alt="css" />
              <h3>SCSS/CSS</h3>
            </div>

            <div className="skills-box">
              <img src={ruby} alt="ruby" />
              <h3>Ruby</h3>
            </div>

            <div className="skills-box">
              <img src={react} alt="react" />
              <h3>ReactJS</h3>
            </div>
          </div>

          <div className="skills-container" data-aos="zoom-in-up">
            <div className="skills-box">
              <img src={node} alt="node" />
              <h3>Rest-API</h3>
            </div>

            <div className="skills-box">
              <img src={mongoo} alt="mongoo" />
              <h3>Mongoose</h3>
            </div>

            <div className="skills-box">
              <img src={java} alt="java" />
              <h3>Java</h3>
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="main-containers" id="skills" data-aos="zoom-in">
    //   <div className="skills-container">
    //     <div className="container">
    //       <div className="title">
    //         <h1>SKILLS</h1>
    //       </div>

    //       <div className="pics-container">
    //         <div className="pics-box">
    //           <div className="top-box" data-aos="zoom-in-up">
    //             <div className="pics">
    //               <img src={html} alt="html" />
    //               <p className="bold">HTML</p>
    //             </div>

    //             <div className="pics">
    //               <img src={css} alt="css" />
    //               <p className="bold">CSS/SCSS</p>
    //             </div>

    //             <div className="pics">
    //               <img src={ruby} alt="ruby" />
    //               <p className="bold">RUBY</p>
    //             </div>

    //             <div className="pics">
    //               <img src={react} alt="react" />
    //               <p className="bold">React JS</p>
    //             </div>
    //           </div>

    //           <div className="bottom-box" data-aos="zoom-in-up">
    //             <div className="pics">
    //               <img src={node} alt="node" />
    //               <p className="bold">Node/ExpressJS</p>
    //             </div>

    //             <div className="pics">
    //               <img src={mongoo} alt="mongoo" />
    //               <p className="bold">MongoDB</p>
    //             </div>

    //             <div className="pics">
    //               <img src={java} alt="java" />
    //               <p className="bold">Java</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
