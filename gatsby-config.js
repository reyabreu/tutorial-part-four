module.exports = {
    siteMetadata: {
        title: `A Sample Configurable Title`,
    },
    plugins: [
      `gatsby-plugin-glamor`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  };