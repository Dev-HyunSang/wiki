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
        title: "Algorithm with Golang",
        children: CONST.AlgorithmWithGolang
      },
      {
        title: "Rust",
        children: CONST.Rust
      },
      {
        title: "Network",
        children: CONST.Newtwork
      },
      {
        title: "Media",
        children: CONST.Media
      },
      {
        title: "Security",
        children: CONST.Security
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
        title: "Thinkings",
        children: CONST.Thinkgings
      },
      {
        title: 'Books',
        children: CONST.BooksList
      },
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