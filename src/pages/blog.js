import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

import Layout from "../layout/index";

export default ({ data }) => {
  const { totalCount, edges: markdownEdges } = data.allMarkdownRemark;

  return (
    <Layout>
      <h3 className="container hero">博客列表页 - {totalCount}篇</h3>
      <section className="hero">
        {markdownEdges.map(({ node }) => {
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span style={{ color: "#bbb" }}>
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          id
          html
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
      totalCount
    }
  }
`;
