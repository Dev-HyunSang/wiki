(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{307:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2024-01-14-어떻게-grom에서는-sql-injection을-막을-수-있을까"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2024-01-14-어떻게-grom에서는-sql-injection을-막을-수-있을까"}},[t._v("#")]),t._v(" 2024.01.14 - 어떻게 GROM에서는 SQL Injection을 막을 수 있을까?")]),t._v(" "),s("p",[t._v("본 내용에서 Go언어의 ORM 패키지인 GORM에서 어떻게 SQL Injection을 필터링 하는지와 더불어서 SQL Injection의 정외와 방어에 대해서 서술한다.")]),t._v(" "),s("h2",{attrs:{id:"sql-injection이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection이란"}},[t._v("#")]),t._v(" SQL Injection이란?")]),t._v(" "),s("h2",{attrs:{id:"gorm이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gorm이란"}},[t._v("#")]),t._v(" GORM이란?")]),t._v(" "),s("p",[t._v("GORM은 Go언어에서 ORM(Object Relational Mapping)를 할 수 있도록 도와주는 프레임워크이다.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" gorm.io/gorm\ngo get "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" gorm.io/driver/sqlite\ngo get "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" gorm.io/driver/mysql\n")])])]),s("p",[t._v("위와 같은 명령어를 통해서 설치할 수 있으며, Go언어의 구조체와 함게 손쉽게 마이그레이션 하여 사용할 수 있다.\n더 자세한 사항은 "),s("a",{attrs:{href:"https://gorm.io//docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GORM Docs"),s("OutboundLink")],1),t._v("에서 확인하길 바란다.")]),t._v(" "),s("h2",{attrs:{id:"sql-injection-방어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection-방어"}},[t._v("#")]),t._v(" SQL Injection 방어")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("userInput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jinzhu;drop table users;"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// safe, will be escaped")]),t._v("\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name = ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SQL injection")]),t._v("\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name = %v"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("공식 문서에서는 "),s("code",[t._v("fmt")]),t._v(" 패키지를 이용하여 쿼리문을 작성하는 것을 지양하고 있다."),s("br"),t._v("\n위 방식의 코드 작성 형식은 SQL Injection에 취약한 부분이며, 좋지 않은 코드 작성 습관이다."),s("br"),t._v(" "),s("strong",[t._v("왜 그런가?를 본격적으로 살펴보고자 한다,")])]),t._v(" "),s("h2",{attrs:{id:"inside-gorm-package-where-문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inside-gorm-package-where-문"}},[t._v("#")]),t._v(" Inside GORM Package - "),s("code",[t._v("where")]),t._v(" 문")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Where add conditions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See the [docs] for details on the various formats that where clauses can take. By default, where clauses chain with AND.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t// Find the first user with name jinzhu")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//\tdb.Where("name = ?", "jinzhu").First(&user)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t// Find the first user with name jinzhu and age 20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//\tdb.Where(&User{Name: "jinzhu", Age: 20}).First(&user)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t// Find the first user with name jinzhu and age not equal to 20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//\tdb.Where("name = ?", "jinzhu").Where("age <> ?", "20").First(&user)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [docs]: https://gorm.io/docs/query.html#Conditions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("DB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("DB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" conds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildCondition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddClause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clause"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Where"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Exprs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" conds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("어떻게 필터링을 하는지 궁금했습니다. 기본적인 데이터베이스를 다루고 있는 프레임워크에서는 SQL Injection에 대한 필터링을 할 수 있는 기능을 가지고 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"참고하면-좋은-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고하면-좋은-자료"}},[t._v("#")]),t._v(" 참고하면 좋은 자료")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/go-gorm/gorm/issues/2517",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL injection in Gorm With using first and find. #2517"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);