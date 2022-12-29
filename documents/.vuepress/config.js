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
        title: "Monthly I Learned",
        children: CONST.MonthlyILearned
      },
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
        title: "Photos",
        children: CONST.Photos
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