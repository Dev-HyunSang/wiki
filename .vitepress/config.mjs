import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Today HyunSang Learned",
  description: "A VitePress Site",
  base: "/TIL/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Today HyunSang Learned", 
    nav: [
      { text: "About", link: "/about"},
      { text: 'Blog', link: 'https://hyunsang.dev' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-Present HyunSang Park'
    },
    sidebar: [
      {
        text: 'Monthly I Learned ',
        items: [
          { text: "2024년", 
            items: [
              { text: "2024년 6월", link: "/mil/2024-06" }
            ]
          }
        ]
      },
      {
        text: "Programming Language",
        collapsed: true,
        items: [
          { text: "Golang", link: "/programming-language/golang" },
          { text: "JavaScript", link: "/programming-language/javascript"},
          { text: "Python", link: "/programming-language/python"},
        ]
      },
      {
        text: 'Bookmark',
        collapsed: true,
        // 더 손쉽게 링크를 추가하는 방법에 대해서 생각해 보기.
        items: [
          { text: 'Golang', link: '/bookmark/golang' },
          { text: 'JavaScript', link: '/bookmark/javascript' },
          { text: 'Python', link: '/bookmark/python' },
          { text: "Cyber Security", link: "/bookmark/cyber-security"}
        ]
      },
      {
        text: "Papers",
        collapsed: true,
        items: [
          { 
            text: "Cyber Security",
            items: [
              { text: "", link: "/papers/cyber-security/"}
            ]
          }
        ]
      },
      {
        text: "Etc",
        collapsed: true,
        items: [
          { text: "VitePress를 GitHub Action을 이용해서 배포해보자!", link:"/etc/vitepress-github-action"}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dev-HyunSang' },
      { icon: "linkedin", link: "https://www.linkedin.com/in/parkhyunsang/"}
    ]
  }
})
