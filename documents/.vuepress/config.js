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
        title: "Golang",
        children: CONST.Golang,
      },
      {
        title: "Cyber Security",
        children: CONST.CyberSecurity,
      },
      {
        title: "JavaScript",
        children: CONST.JavaScript,
      },
      {
        title: "Rust",
        children: CONST.Rust,
      },
      {
        title: "The Rust Programming Language",
        children: CONST.TheRustProgrammingLanguage,
      },
      {
        title: "Cyber Security Trend Analysis",
        children: CONST.CyberSecurityTrendAnalysis,
      },
      {
        title: "Thesis",
        children: CONST.Thesis,
      },
      {
        title: "Listening",
        children: CONST.Listening,
      },
      {
        title: "Database",
        children: CONST.DataBase,
      },
      {
        title: "Web",
        children: CONST.Web,
      },
      {
        title: "Computer Science",
        children: CONST.ComputerScience,
      },
      {
        title: "Network",
        children: CONST.Network,
      },
      {
        title: "Media",
        children: CONST.Media,
      },
      {
        title: "Security",
        children: CONST.Security,
      },
      {
        title: "References",
        children: CONST.References,
      },
      {
        title: "Errors",
        children: CONST.Errors,
      },
      {
        title: "Books",
        children: CONST.BooksList,
      },
      {
        title: "ETC",
        children: CONST.ETC,
      },
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
