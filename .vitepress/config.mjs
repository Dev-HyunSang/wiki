import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Today HyunSang Learned",
  description: "A VitePress Site",
  base: "/",
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
          { 
            text: "Golang", 
            items: [
              { text: "How to start learning Golang", link: "/programming-language/golang/how-to-start-learning-golang" },
              { text: "Golang Generics", link: "/programming-language/golang/golang-generics"}
            ]
          },
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
          { text: "Cyber Security", link: "/bookmark/cyber-security"},
          { text: "Trend Cyber Security", link: "/bookmark/trend-cyber-security"},
          { text: "Etc", link: "/bookmark/etc"}
        ]
      },
      {
        text: "Papers",
        collapsed: true,
        items: [
          { 
            text: "Cyber Security",
            items: [
              { text: "사이버 공격 확산 방지 및 신속한 대응을 위한 사이버 위협 인텔리전스 분석 기술", link: "/papers/cyber-security/cti-analysis"}
            ]
          },
          {
            text: "North Korea",
            items: [
              { text: "[INSS 전략보고] 러북 정상회담 결과 평가 및 對 한반도 파급 영향", link: "/papers/north-korea/north-korea-and-russia"}
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
