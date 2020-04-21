import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout/index";

export default ({ data, pageContext }) => {
  console.log(pageContext, "page");
  const { tagName, posts } = pageContext;

  return (
    <Layout>
      <div className="container">
        <h3 className="title">Posts about {tagName}</h3>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};
