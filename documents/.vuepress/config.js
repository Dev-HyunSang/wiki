var CONST = require("./const");

module.exports = {
  title: `Today HyunSang Learned`,
  description: `HyunSang's Today I Learned`,
  base: "/TIL/",
  dest: "build",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        title: "Monthly I Learned",
        children: CONST.MonthlyILearned,
      },
      {
        title: "Cyber Security",
        children: CONST.CyberSecurity,        
      },
      {
        title: "Bookmark",
        children: CONST.Bookmark,
      }
    ],
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/Dev-HyunSang/",
      },
      {
        text: "Blog",
        link: "https://hyunsang.dev/",
      },
    ],
  },
};
