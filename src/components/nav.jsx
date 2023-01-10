import React from "react";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <p className="n-left-font">Huu Mai</p>
        </div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="repositories"
                spy={true}
                smooth={true}
              >
                Repositories
              </Link>
            </li>

            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
