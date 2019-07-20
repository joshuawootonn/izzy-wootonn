require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Izzy Schrock`,
    description: `Nice`,
    author: `Joshua Wootonn`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-vimeo-all',
    //   options: {
    //     clientId: process.env.VIMEO_CLIENT_ID,
    //     clientSecret: process.env.VIMEO_CLIENT_SECRET,
    //     accessToken: process.env.VIMEO_ACCESS_TOKEN,
    //   }
    // },
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: process.env.VIMEO_CLIENT_ID,
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        userID: 1953551,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
