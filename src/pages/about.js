import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/index";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h4 className="hero">{data.site.siteMetadata.title}</h4>
        <p>叶威，一个前端开发者。</p>
      </div>
      <div className="container"></div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
