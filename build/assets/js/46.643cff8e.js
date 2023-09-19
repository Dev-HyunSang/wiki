(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{222:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,a=s._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_3-일반적인-프로그래밍-개념"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-일반적인-프로그래밍-개념"}},[s._v("#")]),s._v(" 3. 일반적인 프로그래밍 개념")]),s._v(" "),a("ul",[a("li",[s._v("변수, 기본 타입, 함수, 주석, 그리고 제어 흐름에 대해서 배울 예정이다. 이러한 기초는 모든 러스트 프로그램에 사용될 것이며, 이를 일찍 배우면 강력한 기반을 바탕으로 시작할 수 있게 할 것이다.")])]),s._v(" "),a("h2",{attrs:{id:"변수와-가변성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변수와-가변성"}},[s._v("#")]),s._v(" 변수와 가변성")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("변수는 기본적으로 불변(immutable)이다. 러스트가 제공하는 안정성과 쉬운 동시성을 활용하는 방식으로 코드를 작성할 수 있도록 하는 넛지(nudge, 슬며시 선택을 유도하기) 중 하나이다. 변수를 가변(mutable)으로 만들 수 있다. 어떻게 하는지 살펴보고 왜 러스트가 불변성을 권하는지와 어떨 때 가변성을 써야 하는지 알아보자.")])]),s._v(" "),a("li",[a("p",[s._v("변수가 불변일 때, 어떤 이름에 한번 값이 묶이면 그 값은 바꿀 수 다. 이를 표현하기 위해, "),a("code",[s._v("cargo new variables")]),s._v("로 "),a("em",[s._v("projects")]),s._v(" 디렉토리 안에 "),a("code",[s._v("variables")]),s._v("라는 프로젝트를 만들어 보자.")])])]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of x is: {x}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of x is: {x}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" run          \n   Compiling variables v0.1.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/park.hyunsang/dev/github/The_Rust_Programming_Language/ch03/variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("E0384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": cannot assign twice to immutable variable "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n --"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" src/main.rs:4:5\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         -\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         first assignment to "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         help: consider making this binding mutable: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("mut x"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     println"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of x is: {x}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     ^^^^^ cannot assign twice to immutable variable\n\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about this error, try "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("rustc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--explain")]),s._v(" E0384"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nerror: could not compile "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("variables"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"variables"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" due to previous error\n")])])]),a("ul",[a("li",[s._v("위 코드를 실행하는 경우, 불변성 에러에 관한 에러 메시지를 받게 됩니다.")]),s._v(" "),a("li",[a("code",[s._v("불변 변수")]),s._v("x"),a("code",[s._v("에 두번 값을 할당할 수 없다")]),s._v("라는 내용의 에러 메시지를 받았다. "),a("code",[s._v("불변 변수 x")]),s._v("에 두 번째 값을 할당하려고 했기 때문이다.")]),s._v(" "),a("li",[s._v("불변으로 지정한 값을 변경하려고 하는 바로 이 상황이 버그로 이어질 수 있기 때문에, 컴파일 타임 에러가 발생하는 것은 중요하다. 만약 코드의 한 부분이 변숫값은 변하지 않는다는 전제 하에 작동하고 코드의 다른 부분이 그 값을 바꾼다면, 앞부분의 코드는 원래 지정된 일을 못할 가능성이 생긴다.")]),s._v(" "),a("li",[s._v("이런 류의 버그는 발생 후 추적하는 것이 어렵다. 특히 코드의 두 번재 부분이 값을 가끔씩만 변경하는 경우가 그렇다. 러스트 컴파일러는 값이 바뀌지 않을 것이라고 여러분이 지정하면 실제로 그렇도록 보증한다. 코드를 읽고 쓸 때 값이 어디서 어떻게 바뀔지 추적할 필요가 없다는 것이다. 따라서 여러분의 코드는 흐름을 따라가기 쉬워진다.")]),s._v(" "),a("li",[s._v("가변성은 아주 유용할 수 있고, 코드 작성을 더 편하게 해 준다. 변수는 기본적으로 불변이더라도, 앞써서 했던 것처럼 변수명 앞에 "),a("code",[s._v("mut")]),s._v("을 붙여서 가변으로 만들 수 있다.\n"),a("code",[s._v("mut")]),s._v("를 추가하는 것은 또한 미래에 코드를 읽는 이들에게 코드의 다른 부분에 이 변수의 값이 변하는 것이라는 의도를 전달한다.")])]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mut")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of x is: {x}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of x is: {x}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" run\n   Compiling variables v0.1.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/park.hyunsang/dev/github/The_Rust_Programming_Language/ch03/variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Finished dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".55s\n     Running "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("target/debug/variables"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nThe value of x is: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nThe value of x is: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])])]),a("p",[a("code",[s._v("mut")]),s._v("를 사용해 "),a("code",[s._v("x")]),s._v("의 값을 "),a("code",[s._v("5")]),s._v("에서 "),a("code",[s._v("6")]),s._v("으로 바꿀 수 있다. 가변성을 사용할지 말지는 코드를 작성하는 사람의 몫이고, 특정 상황에서 가장 명확하다고 생각하는 것이 어떤 것인지에 따라서 달라진다.")]),s._v(" "),a("h3",{attrs:{id:"상수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상수"}},[s._v("#")]),s._v(" 상수")]),s._v(" "),a("ul",[a("li",[s._v("상수(constant)는 불변 변수와 비슷하다. 어떤 이름에 묶여 있는 값이고 값을 바꾸는 것이 허용되지 않지만, 변수와는 약간 다른 점이 있다.\n"),a("ul",[a("li",[s._v("상수는 "),a("code",[s._v("mut")]),s._v("와 함께 사용할 수 없다. 상수는 기본적으로 불변인 것이 아니고, 항상 불변이다. "),a("strong",[s._v("상수는 "),a("code",[s._v("let")]),s._v(" 키워드 대신 "),a("code",[s._v("const")]),s._v(" 키워드로 선언하며, 값의 타입은 반드시 명시 되어야 한다.")])])])]),s._v(" "),a("li",[a("strong",[s._v("상수는 전역 스코프를 포함한 어떤 스코프에서도 선언 가능하므로 코드의 많은 부분에서 알 필요가 있는 값에 유용하다.")])]),s._v(" "),a("li",[a("strong",[s._v("상수는 반드시 상수 표현식으로만 설정될 수 하고 런타임에서만 계산될 수 있는 결괏값으로 안 된다.")])])]),s._v(" "),a("p",[s._v("상수 선언의 예제:")]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("THREE_HOURS_IN_SECONDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("u32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("상수의 이름은 "),a("code",[s._v("THREE_HOURES_IN_SECONDS")]),s._v("이고, 값은 60(분당 초의 개수), 60(시간당 분의 개수), 3(이 프로그램에서 알아둘 필요가 있는 시간의 숫자)를 모두 곱한 값이다.\n"),a("ul",[a("li",[a("strong",[s._v("러스트의 이름 짓기 관례에서 상수느 단어 사이에 밑줄을 사용하고 모든 글자를 대문자로 쓰는 것이다.")])]),s._v(" "),a("li",[s._v("컴파일너는 컴파일 타임에 제한된 연산을 수행할 수 있는데, 이런 상숫값을 10,800으로 쓰는 대신 이해하고 검사하기 더 쉽게 작성할 방법을 제공한다.")])])]),s._v(" "),a("li",[s._v("상수는 선언된 스코프 내에서 프로그램이 동작하는 전체 시간 동아 유효합니다. 이러한 특성은, 플레이어가 얻을 수 있는 점수의 최곲이라던가 빛의 속도 같이, 프로그램의 여러 부분에서 알 필요가 있는 값들에 유용하다.")]),s._v(" "),a("li",[s._v("전체 프로그램에 하드코딩된 값에 상수로써 이름을 붙이는 것은 미래의 코드 관리자에게 그 값의 의미를 전달하는데 유용하다. 나중에 업데이트될 하드코딩된 값을 단 한 군데에서 변경할 수 있게 해 준다.")])]),s._v(" "),a("h3",{attrs:{id:"섀도잉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#섀도잉"}},[s._v("#")]),s._v(" 섀도잉")]),s._v(" "),a("ul",[a("li",[s._v("새 변수를 이전 변수명과 같은 이름으로 선언할 수 있다. 러스타시안들은 첫 번째 변수가 두 번째 변수에 의해 가려졌다(shadowed)라고 표현하며, 이는 해당 변수의 이름을 사용할 때 컴파일러가 두 번째 변수를 보게 될 것이라는 의미이다.")])])])}],!1,null,null,null);a.default=r.exports}}]);