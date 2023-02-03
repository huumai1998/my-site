import React from "react";
import videoBg from "../assets/HuuMai-RegisterSite.mp4";
export const Repositories = () => {
  return (
    <>
      <section className="main-containers" id="repositories">
        <div className="repositories-container">
          <div className="container">
            <div className="title">
              <h1>REPOSITORIES</h1>
            </div>
            <div className="r-cards">
              <div className="containers">
                <div className="box-repositories">
                  <div className="repositories-1">
                    <div className="title">
                      <h2>Coversy</h2>
                    </div>
                    <div className="description">
                      <p>Teacher management system</p>
                      <p className="role">Role: Font-End Developer</p>
                      <p className="tech">
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
                    <div className="title">
                      <h2>Caravelle</h2>
                    </div>
                    <div className="description">
                      <p>Customer Service system</p>
                      <p className="role">Role: Full-stack Developer</p>
                      <p className="tech">
                        Techniques: customers to view restaurant menu, place
                        orders, and pay online.
                      </p>
                      <a
                        href="https://github.com/drewxs/coversy"
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
