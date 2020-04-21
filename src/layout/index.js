import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

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
    <div style={{ margin: `2rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <ListLink to={"/"}>
        <h1 className="title">{data.site.siteMetadata.name}</h1>
      </ListLink>
      <ListLink to={"/about/"}>About</ListLink>
      <ListLink to={"/tags/"}>Browse by Tag</ListLink>
      {children}
    </div>
  );
};
