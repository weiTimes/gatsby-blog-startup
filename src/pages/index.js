import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { motion } from "framer-motion";

import Layout from "../layout/index";

import ICON_HOME from "../assets/images/home-820389.jpg";

const Container = styled.div`
  text-align: center;
`;
const Title = styled.h1``;
const SubTitle = styled.p``;

export default ({ data }) => {
  const { edges } = data.allFile;

  return (
    <Layout>
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 className="title">Hi, 我是Ye Wei</h1>
            <h2 className="subtitle">一个前端攻城狮 - In HangZhou</h2>
          </div>
        </div>
        <div className="hero-foot">
          <div
            className="content has-text-centered"
            style={{ marginBottom: "20px" }}
          >
            © 2020, Built with <strong>Gatsby</strong>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          extension
          relativePath
          birthTime(fromNow: true)
          prettySize
        }
      }
    }
  }
`;
