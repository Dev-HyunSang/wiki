(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{198:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("REST API를 개발 시에 구조와 응답에 구조체에 대해서 생각을 많이하게 됩니다.")]),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("Is there any standard for JSON API response format?"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/@bojanmajed/standard-json-api-response-format-c6c1aabcaa6d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Standard JSON API response format"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/39613798/rest-api-response-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("rest api response format"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gist.github.com/mgcm/4d4ddf687b1399b87de4",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("instagram.json")]),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("위 글을 참고해 보았습니다.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("위 응답 포맷을 Go언어로 변환하면 아래와 같습니다.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("hr"),t._v(" "),s("p",{staticStyle:{"text-align":"right",color:"gray"}},[t._v("\n2022.12.26 작성하였음.\n")])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"_20221226-요청-및-응답-구조체에-대한-고찰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20221226-요청-및-응답-구조체에-대한-고찰"}},[this._v("#")]),this._v(" 20221226-요청 및 응답 구조체에 대한 고찰")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"참고한-자료들-속에서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고한-자료들-속에서"}},[this._v("#")]),this._v(" 참고한 자료들 속에서")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OAuthException"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagination"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next_max_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13872296"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("위 응답은 Instgram에서 사용하는 응답 포맷으로써 이 방법을 주로 사용하기로 했습니다."),t("br"),this._v("\n이유는 간단합니다. 반복되는 코드를 입력하게 될텐데 그때마다 다른 응답 구조체처럼 중복되는 내용을 계속 치고 싶지 않아서 위와 같은 포맷을 사용하기로 했습니다.")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MetaData "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Status "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"status"`')]),t._v("\n    StatusCode "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"status_code"`')]),t._v("\n    Message "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"message"`')]),t._v("\n    Success "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"success"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Pagination "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    NextURL "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"next_url"`')]),t._v("\n    NextMaxID "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"next_max_id"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Resoponse "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MeatData "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"meta"`')]),t._v("\n    Data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"data"`')]),t._v("\n    Pagination "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"pagination"`')]),t._v("\n    ResoponsedAt time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"resoponsed_at"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("위와 같은 방식으로 응답 구조를 사용하고자 합니다. "),t("code",[this._v("MetaData{}")]),this._v(" 구조체 값들은 임의로 일부분 추가하였습니다.")])}],!1,null,null,null);s.default=r.exports}}]);