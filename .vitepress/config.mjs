import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HyunSang's Today I Learned",
  description: "A VitePress Site",
  base: "/TIL/",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "HyunSang's TIL", 
    nav: [
      { text: "About", link: "/about"},
      { text: 'Blog', link: 'https://hyunsang.dev' }
    ],
    sidebar: [
      {
        text: 'Bookmark',
        // 더 손쉽게 링크를 추가하는 방법에 대해서 생각해 보기.
        items: [
          { text: 'Golang', link: '/bookmark/golang' },
          { text: 'JavaScript', link: '/bookmark/javascript' },
          { text: 'Python', link: '/bookmark/python' },
        ]
      },
      {
        text: "Papers",
        items: [
          { text: "Cyber Security", link: "papers/cyber-security"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dev-HyunSang' },
      { icon: "linkedin", link: "https://www.linkedin.com/in/parkhyunsang/"}
    ]
  }
})
