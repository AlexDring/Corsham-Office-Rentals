module.exports = {
  siteMetadata: {
    title: `corsham-office-rentals`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    //   {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     "projectId": "chergncb",
    //     "dataset": "production"
    //   }
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};