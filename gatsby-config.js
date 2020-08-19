/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yewei的博客`,
    description: `我要最狂的风，最烈的酒`,
    author: `Yewei`,
    name: `Yewei`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-purple-headers`,
            options: {
              // Options here
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yewei's Blog`,
        short_name: `Yewei`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-pixabay", // 自定义插件，从pixabay网站抓取数据
      options: {
        key: "15859977-5562a4b2a3b658f0d66b2fda3",
        q: "yellow flowers",
      },
    },
  ],
};
