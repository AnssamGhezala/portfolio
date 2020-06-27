module.exports = {
  siteMetadata: {
    siteTitle: 'Seif Ghezala',
    siteDescription: 'Frontend Developer',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-hacker.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Seif Ghezala',
    authorDescription: 'Frontend Developer', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:seif@tinloof.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/seif_ghezala`
      },
      {
        icon: `github`,
        url: `https://github.com/siffogh`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '⬈ '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seif Ghezala`,
        short_name: `Seif`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.jpeg`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
