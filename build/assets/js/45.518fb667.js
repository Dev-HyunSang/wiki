(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{221:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("ul",[t._m(8),t._v(" "),s("li",[t._v("기본적으로 러스트는 모든 프로그램의 스코프로 가져오는 표준 라이브러리에 정의된 아이템 집합을 가지고 있다. 이 집하을 프렐루드(prelude)라고 부른다. 이와 관련된 내용은 "),s("a",{attrs:{href:"https://doc.rust-lang.org/reference/names/preludes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("표준 라이브러리 문서"),s("OutboundLink")],1),t._v("를 참고하자.")]),t._v(" "),t._m(9)]),t._v(" "),s("hr"),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),s("ul",[t._m(18),t._v(" "),t._m(19),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.rust-lang.org/std/string/struct.String.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("String")]),s("OutboundLink")],1),t._v("은 표준 라이브러리에서 제공하는 확장 가능한(growable) UTF-8 인코딩의 문자열 타입이다.")]),t._v(" "),s("li",[s("code",[t._v("::new")]),t._v("에 있는 "),s("code",[t._v("::")]),t._v("는 "),s("code",[t._v("new")]),t._v("가 "),s("code",[t._v("String")]),t._v(" 타입의 연관 함수(associated function)임을 나타낸다. "),t._m(20),t._v("이다. 이 "),s("code",[t._v("new")]),t._v(" 함수는 비어있는 새 문자열을 생성한다. "),s("code",[t._v("new")]),t._v("는 어떤 새로운 값을 만드는 함수 이름으로 흔히 사용되는 이름이기 때문에, 여러 타입에서 "),s("code",[t._v("new")]),t._v(" 함수를 찾아볼 수 있다.\n"),s("ul",[s("li",[t._v("연관 함수(associated function)와 관련된 자료이며, "),s("a",{attrs:{href:"https://yongj.in/rust/rust-methods/",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Rust] 메서드와 연관함수"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://hyunmin1906.tistory.com/311",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Rust/러스트] 구조체의 메소드, 연관함수"),s("OutboundLink")],1),t._v("를 참고하면 된다.")])])]),t._v(" "),t._m(21)]),t._v(" "),t._m(22),t._v(" "),t._m(23),s("ul",[t._m(24),t._v(" "),s("li",[s("code",[t._v("stdin")]),t._v(" 함수는 터미널의 표준 입력의 핸들(handle)을 나타내는 타입인 "),s("a",{attrs:{href:"https://doc.rust-lang.org/std/io/fn.stdin.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("std::io::Stdin")]),s("OutboundLink")],1),t._v("의 인스턴스를 돌려준다.")]),t._v(" "),t._m(25),t._v(" "),t._m(26)]),t._v(" "),s("hr"),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),s("ul",[t._m(32),t._v(" "),t._m(33),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.rust-lang.org/std/result/enum.Result.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Result")]),s("OutboundLink")],1),t._v("는 "),s("em",[t._v("enum")]),t._v("이라고도 일컫는 "),s("a",{attrs:{href:"https://rinthel.github.io/rust-lang-book-ko/ch06-00-enums.html",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("열거형(enumeration)")]),s("OutboundLink")],1),t._v("인데, 여러 개의 가능한 상태 중에 하나의 값이 될 수 있는 타입이다. 이러한 기능한 상태 값을 *배리언트(vaiant)*라고 부른다.")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[t._m(34),t._v(" "),s("li",[t._v("다른 타입들처럼 "),s("code",[t._v("Result")]),t._v(" 타입의 값에도 메서드가 있습니다. "),s("code",[t._v("Result")]),t._v(" 인스턴스에는 "),s("a",{attrs:{href:"https://doc.rust-lang.org/std/result/enum.Result.html#method.expect",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("expect")]),t._v(" 메서드"),s("OutboundLink")],1),t._v("가 있습니다. 만약 "),s("code",[t._v("Result")]),t._v(" 인스턴스가 "),s("code",[t._v("Err")]),t._v("일 경우 "),s("code",[t._v("expect")]),t._v(" 메서드는 프로그램의 작동을 멈추고 "),s("code",[t._v("expect")]),t._v("에 인수로 넘겼던 메서지를 출력하도록 한다.")]),t._v(" "),t._m(35)]),t._v(" "),s("hr"),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._m(39),t._v(" "),t._m(40)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"_2-추리-게임"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-추리-게임"}},[this._v("#")]),this._v(" 2. 추리 게임")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"새로운-프로젝트-준비하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#새로운-프로젝트-준비하기"}},[this._v("#")]),this._v(" 새로운 프로젝트 준비하기")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cargo")]),this._v(" new guessing_game\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("cd")]),this._v(" guessing_game\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cargo")]),t._v(" run \n   Compiling guessing_game v0.1.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/park.hyunsang/dev/github/The_Rust_Programming_Language/ch02/guessing_game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Finished dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unoptimized + debuginfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".52s\n     Running "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("target/debug/guessing_game"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\nHello, world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("새로운 프로젝트를 생성한다.")]),this._v(" "),t("li",[this._v("기존의 프로젝트를 생성하면서 자동적으로 "),t("code",[this._v("main.rs")]),this._v("라는 파일 생성되는데 기본적으로 작성되어 있는 코드를 빌드하고 실행한다.")])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"추릿값을-처리하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#추릿값을-처리하기"}},[this._v("#")]),this._v(" 추릿값을 처리하기")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guess the number!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please input your guess."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed to read line"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You guessed: {guess}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("li",[this._v("사용자 입력을 받고 결괏값을 표시하기 위해서는 "),t("code",[this._v("io")]),this._v(" 입출력 라이브러리를 스코프로 가져와야 한다.\n"),t("code",[this._v("io")]),this._v(" 라이브러리는 "),t("code",[this._v("std")]),this._v("라고 불리는 표준 라이브러리에 있다.")])},function(){var t=this._self._c;return t("li",[this._v("만약 원하는 타입이 프렐루드에 없다면 "),t("code",[this._v("use")]),this._v("문을 활용하여 명시적으로 사용할 타입을 가져와야 한다.\n"),t("code",[this._v("std::io")]),this._v("는 사용자의 입력을 받는 것을 포함하여 "),t("code",[this._v("io")]),this._v("와 관련된 기능들을 제공한다.")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"변수에-값-저장하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변수에-값-저장하기"}},[this._v("#")]),this._v(" 변수에 값 저장하기")])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("아래와 같이 사용자의 입력값을 저장할 **변수(variable)**를 생성한다.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("변수를 만들기 위해서는 "),t("code",[this._v("let")]),this._v("를 사용한다. 다음 코드도 변수를 선언하는 예시이다.")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("let")]),this._v(" apples "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("위 변수("),t("code",[this._v("apples")]),this._v(")는 변수를 만들고 5라는 값을 묶어 넣습니다. 러스트에서 변수는 기본적으로 불변(immutable)이다. 이는 변수에 어떤 값을 집어넣으면 그 값이 안 바뀐다(상수).")]),this._v(" "),t("li",[this._v("변수의 값을 가변(mutable), 즉 변경 가능하도록 하려면 변수명 앞에 "),t("code",[this._v("mut")]),this._v("를 추가하면 된다(변수).")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apples "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// immutable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" bananas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutable")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cargo")]),t._v(" run                                                   \n   Compiling guessing_game v0.1.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/park.hyunsang/dev/github/The_Rust_Programming_Language/ch02/guessing_game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Finished dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unoptimized + debuginfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".22s\n     Running "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("target/debug/guessing_game"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\nGuess the number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nPlease input your guess.\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nYou guessed: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n")])])])},function(){var t=this._self._c;return t("li",[t("code",[this._v("let mut guess")]),this._v("가 "),t("code",[this._v("guess")]),this._v("라는 이름의 가변 변수(변수)임을 알 수 있다. 등호("),t("code",[this._v("=")]),this._v(")는 지금 해당 변수에 어떤 값을 묶어 넣고자 함을 뜻한다.")])},function(){var t=this._self._c;return t("li",[this._v("동호의 오른쪽에는 "),t("code",[this._v("guess")]),this._v("에 묶일 값이 있는데, 이번 예시에서는 함수 "),t("code",[this._v("String::new")]),this._v("의 결괏값인 새로운 "),t("code",[this._v("String")]),this._v(" 인스턴스가 묶일 대상이 된다.")])},function(){var t=this._self._c;return t("strong",[this._v("연관 함수란 어떤 타입에 구현된 함수고, 위의 경우에는 "),t("code",[this._v("String")]),this._v(" 타입에 만들어진 함수")])},function(){var t=this._self._c;return t("li",[t("strong",[this._v("요악하자면 "),t("code",[this._v("let mut guess = String::new();")]),this._v(" 라인은 새로운 빈 "),t("code",[this._v("String")]),this._v(" 인스턴스를 묶어놓은 가변 변수(변수)를 생성한다.")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"사용자-입력받기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용자-입력받기"}},[this._v("#")]),this._v(" 사용자 입력받기")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this._self._c;return t("li",[this._v("프로그램 시작 지점에 "),t("code",[this._v("use std::io")]),this._v("를 통해 "),t("code",[this._v("io")]),this._v(" 라이브러리를 가져오지 않았더라도, 함수 호출 시 "),t("code",[this._v("std::io::stdin")]),this._v("처럼 작성하는 것으로 이 함수를 이용할 수 있다.")])},function(){var t=this,s=t._self._c;return s("li",[t._v("코드의 다음 부분인 "),s("code",[t._v(".read_line(&mut guess)")]),t._v("는 사용자로부터 입력받기 위해 표준 입력 핸들에서 "),s("code",[t._v("read_line")]),t._v(" 메서드를 호출한다. 여기에 "),s("code",[t._v("&mut guess")]),t._v("를 "),s("code",[t._v("read_line")]),t._v("의 인수로 전달하여 사용자 입력이 어떤 문자열에 저장될 것인지 알려준다.")])},function(){var t=this._self._c;return t("li",[t("code",[this._v("read_line")]),this._v("의 전체 기능을 사용자가 표준 입력 장치에 입력할 때마다 입력된 문자들을 받아서 문자열에 추가하는 것이므로 문자열을 인수로 넘겨준 것이다. 메서드가 문자열의 내용물을 바꿀 수 있기 때문에 이 문자열 인수는 가변이어야 한다.")])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("code",[t._v("&")]),t._v("는 "),s("strong",[t._v("코드의 여러 부분에서 데이터를 여러 번 메모리로 복사하지 않고 접근하기 위한 방법을 제공하는")]),t._v(" "),s("em",[s("strong",[t._v("참고자(referenc)")])]),t._v(" "),s("strong",[t._v("임을 나타낸다.")]),t._v(" 참조는 복잡한 기능이고, 러스트의 큰 이점 중 하나가 바로 참조자를 사용할 때의 안정성과 편의성이다.")]),t._v(" "),s("li",[t._v("이 프로그램을 작성하기 위해 참조에 대한 자세한 내용을 알 필요는 없다. 지금 당장 참조자가 변수처럼 기본적으로 불변(상수)임을 알기만 하면 된다. 따라서 "),s("code",[t._v("&guess")]),t._v("가 아니라 "),s("code",[t._v("&mut guess")]),t._v("로 작성하여 가변(변수)으로 만들 필요가 있다.")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"result-타입으로-잠재적-실패-다루기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-타입으로-잠재적-실패-다루기"}},[this._v("#")]),this._v(" "),t("code",[this._v("Result")]),this._v(" 타입으로 잠재적 실패 다루기")])},function(){var t=this._self._c;return t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Failed to read line"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("위 코드를 아래처럼 사용할 수도 있다.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed to read line"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("li",[this._v("하나의 긴 라인은 가독성이 떨어지므로 라인을 나누는 것이 좋다. "),t("code",[this._v(".method_name()")]),this._v(" 문법으로 어떤 메서드를 호출할 때는 줄 바꿈과 다른 공백문자로 긴 라인을 쪼개는 것이 보통 현명한 선택이다.")])},function(){var t=this._self._c;return t("li",[this._v("이전에 언급한 것처럼 "),t("code",[this._v("read_line")]),this._v("은 우리가 인수로 넘긴 문자열에 사용자가 입력한 것을 저장할 뿐만 아니라 하나의 "),t("code",[this._v("Result")]),this._v(" 값을 돌려준다.")])},function(){var t=this,s=t._self._c;return s("li",[s("strong",[s("code",[t._v("Result")]),t._v(" 타입의 목적은 에러 처리용 정보를 담아내기 위한 것이다.")]),s("br"),t._v(" "),s("code",[t._v("Result")]),t._v("의 배리언트는 "),s("code",[t._v("Ok")]),t._v("와 "),s("code",[t._v("Err")]),t._v("입니다.\n"),s("ul",[s("li",[s("code",[t._v("Ok")]),t._v("는 처리가 성공했음을 나타내며 내부에 성공적으로 생성된 결과를 가지고 있다.")]),t._v(" "),s("li",[s("code",[t._v("Err")]),t._v("는 처리가 실패했음을 나타내고 그 이유에 대한 정보를 가지고 있다.")])])])},function(){var t=this,s=t._self._c;return s("li",[t._v("만약 "),s("code",[t._v("read_line")]),t._v(" 메서드가 "),s("code",[t._v("Err")]),t._v("를 돌려줬다면 그 에러는 운영체제로부터 발생한 에러일 경우가 많다. 만약 "),s("code",[t._v("Result")]),t._v("가 "),s("code",[t._v("Ok")]),t._v(" 값이라면 "),s("code",[t._v("expect")]),t._v("는 "),s("code",[t._v("Ok")]),t._v("가 가지고 있는 결괏값을 돌려주어 사용할 수 있도록 한다. 위의 경우 결괏값은 사용자가 표준 입력으로 입력했던 바이트의 개수이다.")])},function(){var t=this._self._c;return t("ul",[t("li",[t("strong",[t("code",[this._v("expect")]),this._v("를 호출하지 않는다면 컴파일은 되지만 경고가 발생한다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cargo")]),t._v(" build\n   Compiling guessing_game v0.1.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/park.hyunsang/dev/github/The_Rust_Programming_Language/ch02/guessing_game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwarning: unused "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("Result"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" that must be used\n  --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" src/main.rs:10:5\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" /     io::stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         read_line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mut guess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_____________________________^\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" note: this "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("Result"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" may be an "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("Err"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" variant, "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" should be handled\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" note: "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[warn(unused_must_use)]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" on by default\nhelp: use "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" to ignore the resulting value\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" io::stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     +++++++\n\nwarning: "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("guessing_game"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guessing_game"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" generated "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" warning\n    Finished dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unoptimized + debuginfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".65s\n")])])])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("strong",[t._v("러스트는 "),s("code",[t._v("read_line")]),t._v("가 돌려주는 "),s("code",[t._v("Result")]),t._v(" 값을 사용하지 않았음을 경고하며 일어날 수 있는 에러를 처리하지 않았음을 알려준다.")]),t._v(" "),s("ul",[s("li",[t._v("이 경고를 없애는 옳바른 방법은 에러 처리용 코드를 작성하는 것이지만, 지금의 경우에는 문제가 발생했을 때 프로그램이 종료되는 것을 원하므로 "),s("code",[t._v("expect")]),t._v("를 사용할 수 있다.")])])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"println-자리표시자를-이용한-값-출력하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#println-자리표시자를-이용한-값-출력하기"}},[this._v("#")]),this._v(" "),t("code",[this._v("println!")]),this._v(" 자리표시자를 이용한 값 출력하기")])}],!1,null,null,null);s.default=e.exports}}]);