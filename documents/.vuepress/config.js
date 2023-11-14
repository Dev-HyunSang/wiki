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
        title: "Golang Algorithm",
        children: CONST.GolangAlgorithm,
      },
      {
        title: "Java",
        children: CONST.Java,
      },
      {
        title: "JavaScript",
        children: CONST.JavaScript,
      },
      {
        title: "Computer Science",
        children: CONST.ComputerScience,
      },
      {
        title: "Cyber Security",
        children: CONST.CyberSecurity,
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
        title: "DataBase",
        children: CONST.DataBase,
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
