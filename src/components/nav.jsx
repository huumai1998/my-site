import React from "react";

export const Nav = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <h2>Huu Mai</h2>
        </div>

        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#">My Repository</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
