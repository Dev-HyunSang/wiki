var CONST = require("./const");

module.exports = {
  title: `Today HyunSang Learned`,
  description: `HyunSang's Today I Learned`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: "Golang",
        children: CONST.Golang
      },
      {
        title: "References",
        children: CONST.References
      },
      {
        title: "Errors",
        children: CONST.Errors
      },
      {
        title: 'Books',
        children: CONST.BooksList
      },
      {
        title: "Daily Log",
        children: CONST.Daily_Log
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/Dev-HyunSang/'
      }, {
        text: 'Blog',
        link: 'https://hyunsang.dev/'
      }
    ]
  },
}