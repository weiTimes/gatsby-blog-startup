import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout/index";

import { SEO } from "../components/index";

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className="title">{post.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

      {prev && (
        <div className="hero">
          <Link to={prev.fields.slug}>上一篇：{prev.frontmatter.title}</Link>
        </div>
      )}
      {next && (
        <div className="hero">
          <Link to={next.fields.slug}>下一篇：{next.frontmatter.title}</Link>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date
        title
      }
    }
  }
`;
