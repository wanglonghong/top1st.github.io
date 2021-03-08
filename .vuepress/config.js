module.exports = {
  title: 'Zhang Xiqian | Web and Blockchain Developer',
  description: "top1st Blockahin Developer",
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}],
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {property: 'og:image', content: 'https://top1st.github.io/assets/images/top1st.jpg'}],
    ['meta', {property: 'twitter:card', content: 'summary_large_image'}],
    ['meta', {property: 'twitter:image', content: 'https://top1st.github.io/assets/images/top1st.jpg'}],
    ['script',
      {
        src: 'https://kit.fontawesome.com/8991cca26e.js',
        crossorigin: 'anonymous',
      }
    ],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1',  // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-191226005-1'
    }],
    // ['vuepress-plugin-facebook-pixel', {
    //   pixelId: '373489733749849'
    // }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Details',
        items: [
          { text: 'About', link: '/about/#about' },
          { text: 'Experience', link: '/about/#experience' },
          { text: 'Open Source', link: '/about/#open-source' },
          { text: 'Education', link: '/about/#education' },
          { text: 'Skills', link: '/about/#skills' },
          { text: 'Contacts', link: '/about/#contacts' },
        ],
      },
    ],
    sidebar: 'auto',
    smoothScroll: true
  }
};
