import React from "react";
import videoBg from "../assets/HuuMai-RegisterSite.mp4";
export const Repositories = () => {
  return (
    <>
      <section className="main-containers">
        <div className="repositories-container">
          <div className="container">
            <div className="title">
              <h1>REPOSITORIES</h1>
            </div>
            <div className="r-cards">
              <div className="containers">
                <div className="box-repositories">
                  <div className="repositories-1">
                    <div className="1-title">
                      <h3>Coversy</h3>
                    </div>
                    <div className="1-description">
                      <p>Teacher management system</p>
                      <p>Role: Font-End Developer</p>
                      <p>
                        Techniques: Instructor shift scheduling, shift exchange,
                        and payroll management system.
                      </p>
                      <a
                        href="https://github.com/drewxs/coversy"
                        target="_blank"
                      >
                        View repositories
                      </a>
                    </div>
                  </div>

                  <div className="repositories-1">
                    <div className="1-title">
                      <h3>Caravelle</h3>
                    </div>
                    <div className="1-description">
                      <p>Restaurant and Louge Services</p>
                      <p>Role: Full-stack Developer</p>
                      <p>
                        Techniques: The purpose of this website is for customers
                        to view restaurant menu, place orders, and pay online.
                      </p>
                      <a
                        href="https://github.com/TieuVanHien/Caravelle"
                        target="_blank"
                      >
                        View repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
