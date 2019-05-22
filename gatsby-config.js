module.exports = {
  pathPrefix: "/gatsby-kibana-starter",
  siteMetadata: {
    title: `Gatsby Kibana Starter`,
    description: `Start building Kibana protoypes quickly with the Gatsby Kibana Starter`,
    author: `@daveyholler`,
  },
  plugins: [
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-kibana-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F5F7FA`,
        theme_color: `#006BB4`,
        display: `minimal-ui`,
        icon: `src/images/logo_elastic.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
