import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout/index";

export default ({ data, pageContext }) => {
  console.log(pageContext);
  const { tags } = pageContext;

  return (
    <Layout>
      <div className="container">
        这是所有的标签
        <ul>
          {tags.map((tagName, index) => (
            <li key={index}>
              <Link to={`tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
