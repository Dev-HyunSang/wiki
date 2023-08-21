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
        title: "Golang",
        children: CONST.Golang,
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
        title: "Database",
        children: CONST.DataBase,
      },
      {
        title: "Web",
        children: CONST.Web,
      },
      {
        title: "Algorithm with Golang",
        children: CONST.AlgorithmWithGolang,
      },
      {
        title: "Coding Interview University",
        children: CONST.CodingInterviewUniversity,
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
