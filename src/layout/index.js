import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";

import LOGO from "../assets/images/logo.png";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            title
          }
        }
      }
    `
  );

  return (
    <div>
      <nav class="navbar">
        <div class="container">
          <div className="navbar-brand">
            <Link to={"/"} className="navbar-item">
              <img src={LOGO} alt="logo" style={{ maxHeight: "1.25rem" }} />
            </Link>
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasic"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasic" class="navbar-menu">
            <div class="navbar-start">
              <Link to={"/blog/"} className="navbar-item">
                博客
              </Link>
              <Link to={"/tags/"} className="navbar-item">
                标签
              </Link>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <a
                  class="button is-dark"
                  href="https://github.com/weiTimes"
                  target="_blank"
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

// <div className="container">
// <nav class="level">
//   <p class="level-item has-text-centered">
//     <Link to={"/about/"}>About</Link>
//   </p>
//   <p class="level-item has-text-centered">
//     <img
//       src="https://bulma.io/images/bulma-type.png"
//       alt="logo"
//       style={{ height: "30px" }}
//     />
//     <Link to="/">{data.site.siteMetadata.name}</Link>
//   </p>
//   <p class="level-item has-text-centered">
//     <Link to={"/tags/"}>Browse by Tag</Link>
//   </p>
// </nav>
// </div>
