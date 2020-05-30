require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Izzy Wootonn`,
    titleTemplate: "%s · Izzy Wootonn",
    description: `I love people + telling stories. I primarily do this with film, but sometimes through graphic design or photography.`,
    keywords: 'film, graphic design, iowa, iowa city, film maker, videographer, freelance, freelancer, freelance videographer, freelance film, freelance film maker, creative',
    url: "https://www.izzywootonn.com",
    image: "/seo.png",
    twitterUsername: `izzy_wootonn`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
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
        name: `Izzy Wootonn`,
        short_name: `Izzy Wootonn`,
        description: 'Freelance Film Maker from Iowa',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d18d82`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: process.env.VIMEO_CLIENT_ID,
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        userID: 114761472,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ],
}
