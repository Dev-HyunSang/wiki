import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const RUST_PATH = "/programming-language/rust/";

export default defineConfig({
  title: "HyunSang's Wiki",
  description: "HyunSang's Wiki",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "HyunSang's Wiki", 
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
        text: 'Daily Record',
        items: [
          {
            text: "2024년의 기록",
            link: "/daily-record/2024"
          },
          { 
            text: "2025년의 기록", 
            link: "/daily-record/2025"
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
          {
            text: "Rust",
            items: [
              {
                text: "Rust에서 인터프리터 작성하기:가이드",
                items: [
                  { text: "1. 소개", link: "/programming-language/rust/interpreters/interpreter-in-rust-1" },
                  {
                    text: "2. 할당자(Allocators)",
                    link: "/programming-language/rust/interpreters/alignment/interpreters-in-rust-2",
                    items: [
                      { text: "2.1 정렬(Alignment)", link: "/programming-language/rust/interpreters/alignment/interpreters-in-rust-2-1"}
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Cyber Security',
        collapsed: true,
        items: [
          {
            text: "Web Hacking",
            items: [
              { text: "CVE Research", link: "/cyber-security/web-hacking/CVE-Research"},
              { text: "SQL Injection", link: "/cyber-security/web-hacking/sql-injection" },
            ]
          },
          {
            text: "CTI",
            items: [
              { text: "What is MITRE ATT&CK?", link: "/cyber-security/cti/What-is-MITRE ATT&CK"},
            ]
          },
          {
            text: "DPRK",
            items: [
              { text: "Cyber Attck Trend", link: "cyber-security/dprk/cyber-attck-trend"},
              { text:"Report", link: "cyber-security/dprk/report"}
            ]
          },
        ]
      },
      {
        text: "법학",
        collapsed: true,
        items: [
          { text: "헌법", link: "/law/constitution-of-republic-of-korea" },
          { text: "형사법", link: "/law/criminal-law" },
          { text: "민사법", link: "/law/civil-act"},
          { text: "판례", link: "/law/judicial-precedent" }
        ]
      },
      {
        text: 'Bookmark',
        collapsed: true,
        // 더 손쉽게 링크를 추가하는 방법에 대해서 생각해 보기.
        items: [
          { text: 'Golang', link: '/bookmark/golang' },
          { text: "Rust", link: "/bookmark/rust"},
          { text: 'JavaScript', link: '/bookmark/javascript' },
          { text: 'Python', link: '/bookmark/python' },
          { text: 'Data', link: '/bookmark/data'},
          { text: 'Back-End', link: "/bookmark/back-end"},
          { text: 'CTI(Cyber Threat Intelligence)', link:"/bookmark/cti" },
          { text: "Web Hacking", link: "/bookmark/web-hacking" },
          { text: "AI, Artificial Intelligence", link: "/bookmark/artificial-intelligence" },
          { text: "Etc", link: "/bookmark/etc" }
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
              { text: "[INSS 전략보고] 러북 정상회담 결과 평가 및 對 한반도 파급 영향", link: "/papers/north-korea/north-korea-and-russia-2024"}
            ]
          }
        ]
      },
      {
        text: "Notes",
        collapsed: true,
        items: [
          { text: "20241228 - 공정성이란 무엇인가", link: "notes/20241228_공정성이란_무엇인가"}
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
