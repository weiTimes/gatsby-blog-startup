const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// 创建标签列表页、标签详情页
const createTagPages = (createPage, posts) => {
  const allTagsTemplate = path.resolve(`./src/templates/all-tags.js`);
  const singleTagTemplate = path.resolve(`./src/templates/single-tag.js`);

  const postsByTag = {};

  // 对文章进行按标签分类
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagTemplate,
      context: {
        tagName,
        posts,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    // const fileNode = getNode(node.parent);
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  createTagPages(createPage, posts);

  posts.forEach(({ node }, index) => {
    const blogPath = node.fields.slug;

    createPage({
      path: blogPath,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: blogPath,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });
};
