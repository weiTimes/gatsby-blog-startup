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
      <Container className="container">
        <motion.div
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#0af",
            position: "absolute",
            left: -200,
          }}
        />
        <Title className="hero title">这是首页!!</Title>
        <div>
          <img src={ICON_HOME} alt="Group of pandas eating bamboo" />
        </div>
        <Title className="title">我网站的文件</Title>
        <table>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
          <tbody>
            {edges.map(({ node }, index) => {
              return (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
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
