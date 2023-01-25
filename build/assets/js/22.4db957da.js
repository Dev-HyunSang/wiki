(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{291:function(e,t,r){"use strict";r.r(t);var v=r(13),o=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_20230122-환경변수에-대한-고찰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20230122-환경변수에-대한-고찰"}},[e._v("#")]),e._v(" 20230122-환경변수에 대한 고찰")]),e._v(" "),t("p",[t("strong",[e._v("어느날, 슬랙으로 개인적으로 팀원 분께서 환경변수를 어떻게 사용해야할지, 그리고 어떻게 설정해야할지 모르겠다는 내용의 궁금증에 대한 질문을 주셔서 제가 생각과 다른 개발자 분들은 어떻게 사용하고 계신지에 대해서 알게된 점을 적습니다.")])]),e._v(" "),t("h2",{attrs:{id:"궁금증"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#궁금증"}},[e._v("#")]),e._v(" 궁금증")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/joho/godotenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoDotEnv"),t("OutboundLink")],1),e._v("를 통해서 "),t("code",[e._v(".env")]),e._v(" 파일을 사용하고 있는데 Docker를 통해서 서버로 배포하는 경우 아래와 같은 문제점이 발생함.\n"),t("ol",[t("li",[e._v("로컬에서는 "),t("code",[e._v(".env")]),e._v(" 파일을 사용해서 서버를 구동 시킬 수 있음. 하지만 Docker 이미지를 생성하고 Docker 이미지를 구동할 경우 "),t("code",[e._v(".env")]),e._v(" 파일을 사용할 수 없음. - 이유에 대한 궁금증이 생김.")]),e._v(" "),t("li",[t("code",[e._v(".env")]),e._v(" 파일이 왜 사용하는지, 어떻게 사용할지에 대한 고찰이 필요했음.")])])])]),e._v(" "),t("h2",{attrs:{id:"궁금증에-대한-고찰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#궁금증에-대한-고찰"}},[e._v("#")]),e._v(" 궁금증에 대한 고찰")]),e._v(" "),t("ul",[t("li",[e._v("로컬에서는 "),t("code",[e._v(".env")]),e._v("를 통해서 사용할 수 있겠지만 보안을 위해서는 Docker에서 구동할 때에는 환경변수를 "),t("code",[e._v("export")]),e._v("를 사용하기를 권장함."),t("br"),e._v("\n그것이 "),t("code",[e._v(".env")]),e._v(" 파일을 사용하는 이유임.")]),e._v(" "),t("li",[t("code",[e._v(".env")]),e._v(" 파일을 이용해서 환경변수를 설정하는 이유는 \"'설정은 코드와 분리해서 작성한다. 분리해서 작성하기 위해 어느 시스템이나 도구로도 인터페이스할수 있는 환경변수를 사용한다. 환경변수를 단일 진입으로 사용한다.'의 상황에서 로컬은 파일로 관리하는게 용이하므로 닷파일 같은걸 사용할 수 도 있다. 상용은 환경변수 주입도구를 사용하는 것이 효과적이다.\"라고 자주 질문 드리는 개발자 분께서 알려주셨습니다.")])]),e._v(" "),t("h2",{attrs:{id:"참고한-자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고한-자료"}},[e._v("#")]),e._v(" 참고한 자료")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://12factor.net/ko/config",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Twelve-Factor App (한국어) - 환경(environment)에 저장된 설정"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("코딩 맛집 분들.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);