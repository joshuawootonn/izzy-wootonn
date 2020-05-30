require('dotenv').config();

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.izzywootonn.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Izzy Wootonn`,
    titleTemplate: "%s · Izzy Wootonn",
    description: `I love people + telling stories. I primarily do this with film, but sometimes through graphic design or photography.`,
    keywords: 'film, graphic design, iowa, iowa city, film maker, videographer, freelance, freelancer, freelance videographer, freelance film, freelance film maker, creative',
    image: "/seo.png",
    twitterUsername: `izzy_wootonn`,
    siteUrl
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-react-helmet`,
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
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
  ],
}
