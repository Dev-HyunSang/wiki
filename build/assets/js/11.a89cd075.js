(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(t,e,a){"use strict";a.r(e);var n=a(13),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"변수와-자료형에-대해"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#변수와-자료형에-대해"}},[t._v("#")]),t._v(" 변수와 자료형에 대해")]),t._v(" "),e("h2",{attrs:{id:"강타입-언어-golang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#강타입-언어-golang"}},[t._v("#")]),t._v(" 강타입 언어, Golang")]),t._v(" "),e("p",[t._v("Golnag은 강타입 중에도 강타입 언어입니다."),e("br"),t._v("\n강타입 언어는 타입이 다른 변수 간의 연산을 허용하지 않습니다. 물론 강타입 언어 중에서도 숫자에 한해서는 연산을 허용하기도 합니다. 정수 + 실수 연산을 허용하는 C언어처럼 허용합니다."),e("br"),t._v("\n강타입 언어의 장점은 타입을 정확하게 인지하고 사용하다는 점입니다. 사용자의 실수로 서로 다른 타입 간의 연산을 하더라도 컴파일 과정을 거치며 에러를 발생시키지 때문에 의도치 않은 변수 간의 연산으로 애를 먹지 않아도 됩니다."),e("br"),t._v("\n따라서, 사용자가 서로 다른 타입 간의 연산을 하기 위해서는 정확하게 인지한 상태로 형변환을 거쳐서 연산을 진행하게 됩니다. 강타입 언어를 사용하다가 Go언어를 사용하는 경우 조금 불편할 수도 있으나, 타입의 확실한 지정으로 에러 발생을 줄일 수 있다는 장점이 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"변수-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#변수-variable"}},[t._v("#")]),t._v(" 변수(Variable)")]),t._v(" "),e("h3",{attrs:{id:"자료형의-종류와-범위"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자료형의-종류와-범위"}},[t._v("#")]),t._v(" 자료형의 종류와 범위")]),t._v(" "),e("p",[t._v("Go언어의 기본 타입은 아래와 같습니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Range or Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bool")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true, false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("int8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 8bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-128 ~ 127")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("int16")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 16 bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-32768 ~ 32767")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("int32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 32bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-2147483648 ~ 2147483647")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("int64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 64bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-9223372036854775808 ~ 9223372036854775807")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uint8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, 8bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 255")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uint16")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, 16bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 65535")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, 32bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 4294967295")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, 64bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 18446744073709551615")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("float32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 32bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("float64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, 64 bit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("signed, either 32 or 64 bits\tcheck")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("check int32 and int64")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uint")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, either 32 or 64 bits")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("check uint32 and uint64")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uintptr")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned, same as uint")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("the bit pattern of any pointer")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("byte")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("alias type of uint8;")]),t._v(" unsigned, same as uint8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 255")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rune")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("alias type of int32; signed, same as int32")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-2147483648 ~ 2147483647")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string is the set of all strings of 8 bit bytes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v('may be empty, but not nil; e.g: "hello" or "" ...')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("complex64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("float 32 bit for real number and another float 32 bit for imaginary number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("e.g.: 3 + 5i")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("complex128")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("float 64 bit for real number and another float 64 bit for imaginary number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("se.g.: 3 + 5i")])])])]),t._v(" "),e("h2",{attrs:{id:"float-보장하는-소수점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#float-보장하는-소수점"}},[t._v("#")]),t._v(" "),e("code",[t._v("float")]),t._v(" 보장하는 소수점")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://velog.velcdn.com/images%2Fvamos_eon%2Fpost%2Ff50c1f2f-6aa8-4ec7-a043-22a1be6ae0c3%2Fimage.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://velog.velcdn.com/images%2Fvamos_eon%2Fpost%2Fdbb0ea02-94b9-4b63-b06d-088096d4defb%2Fimage.png",alt:""}})]),t._v(" "),e("ul",[e("li",[e("code",[t._v("float32")]),t._v("는 소수점 이하 7자리까지 보장됩니다.")]),t._v(" "),e("li",[e("code",[t._v("float64")]),t._v("는 소수점 이하 15자리까지 보장됩니다.")])]),t._v(" "),e("h3",{attrs:{id:"rune의-사용방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rune의-사용방법"}},[t._v("#")]),t._v(" rune의 사용방법")]),t._v(" "),e("p",[e("code",[t._v("int32")]),t._v("의 alias type인 "),e("code",[t._v("rune")]),t._v("은 UTF-8의 문자를 표현할 수 있습니다."),e("br"),t._v("\n물론 "),e("code",[t._v("int32")]),t._v("를 이용해서 UTF-8 문자 표현이 가능합니다.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" runeInit "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("rune")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"🔥"')]),t._v("\nfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%c\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runeInit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"int와-uint에-대해서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#int와-uint에-대해서"}},[t._v("#")]),t._v(" "),e("code",[t._v("int")]),t._v("와 "),e("code",[t._v("uint")]),t._v("에 대해서")]),t._v(" "),e("p",[t._v("위의 표를 보시면 "),e("code",[t._v("int")]),t._v("와 "),e("code",[t._v("uint")]),t._v("는 32bit 자료형이 될 수도, 64bit 자료형이 될 수 있다고 쓰여있습니다."),e("br"),t._v("\nC언어를 예로 들면 "),e("code",[t._v("int")]),t._v("는 항상 4byte의 크기를 가지게 됩니다. 즉, 32bit의 크기를 가집니다."),e("br"),t._v("\nC언어는 실행되는 OS의 레지스터가 32bit인지 64bit인지를 따지지 않고 "),e("code",[t._v("int")]),t._v("에 32bit를 할당합니다.")]),t._v(" "),e("p",[t._v("Golang은 OS의 레지스터에 따라 "),e("code",[t._v("int")]),t._v("의 사이즈가 달라집니다.")]),t._v(" "),e("ul",[e("li",[t._v("32bit OS에서는 "),e("code",[t._v("int == int32")])]),t._v(" "),e("li",[t._v("64bit OS에서는 "),e("code",[t._v("int == int64")])])]),t._v(" "),e("p",[e("code",[t._v("uint")]),t._v("도 마찬가지입니다. 32bit와 64bit는 표현할 수 있는 값의 범위차가 상당히 큽니다."),e("br"),t._v("\n항상 OS의 환경이 다를 수 있음을 염두해 두고 프로글래밍을 해야합니다. alias 타입과 int, uint는 사용에 유의해야 합니다.")]),t._v(" "),e("h3",{attrs:{id:"true와-false에-대해서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#true와-false에-대해서"}},[t._v("#")]),t._v(" "),e("code",[t._v("true")]),t._v("와 "),e("code",[t._v("false")]),t._v("에 대해서")]),t._v(" "),e("p",[t._v("C언어에서 "),e("code",[t._v("stdbool.h")]),t._v(" 표준 라이브러리를 사용하게 되면 bool type의 value인 "),e("code",[t._v("true")]),t._v(", "),e("code",[t._v("false")]),t._v("를 사용할 수 있습니다. C언어에서 true는 1, false는 0의 값을 가집니다.")]),t._v(" "),e("p",[t._v("Golang은 이 두가지의 참과 거짓을 나타내는 true, false의 값이 각각 1과 0의 값을 가지지 않습니다."),e("br"),t._v("\nGolang에서 true와 false는 boolean value일 뿐입니다.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value of true is 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error would be occurred")]),t._v("\n")])])]),e("h2",{attrs:{id:"변수의-초기값"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#변수의-초기값"}},[t._v("#")]),t._v(" 변수의 초기값")]),t._v(" "),e("p",[t._v("모든 변수는 선언과 동시에 기본 값으로 초기화됩니다. 선언하면서 변수에 값을 대입할 수도 있지만 값을 주지 않으면 default 값을 가지게 됩니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("default value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("bool")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("All numeric types")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("complex type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(0+0i)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("uintptr")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("byte")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("alias type of uint8; 0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rune")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("alias type of int32; 0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v('""')])])])]),t._v(" "),e("h3",{attrs:{id:"변수의-선언"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#변수의-선언"}},[t._v("#")]),t._v(" 변수의 선언")]),t._v(" "),e("p",[t._v("변수가 어떤 값을 가지게 하고 싶다면 먼저 변수를 선언해야 합니다. 변수의 선언 방법은 아래와 같습니다.")]),t._v(" "),e("p",[t._v("var 변수명 타입명 (=값, optional) (변수 선언하며 초기화)")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hello "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n")])])]),e("p",[t._v("타입을 지정하며 선언 후 초기화")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hello "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" \nhello "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n")])])]),e("p",[t._v("타입을 지정없이 선언하며 초기화 : 값에 따라 타입이 자동으로 설정(단, default 값에 유의해야 함. 의도치 않은 결과가 나올 수 있음.)")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("hello "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n")])])]),e("p",[t._v("var 변수명 타입명 (=값, optional) (여러 개의 변수 동시 선언 및 초기화)")]),t._v(" "),e("h2",{attrs:{id:"변수의-형변환"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#변수의-형변환"}},[t._v("#")]),t._v(" 변수의 형변환")]),t._v(" "),e("p",[t._v("변수의 형변환은 심심치 않게 필요한 경우들이 생깁니다. 가령 개발을 하다가 A에서 B로 데이터의 이동이 필요한데, B에서는 string 타입이 필요한데 A에서는 해당 데이터를 int 형태로 가공해서 사용하는 케이스가 있을 수 있습니다."),e("br"),t._v("\n그렇게 되면 A에서 string으로 변환해서 B에 전달을 하거나, A가 int 형태로 B에 전달해서 B가 string으로 가공해서 사용하는 방법이 있습니다."),e("br"),t._v("\n둘 중 어느 케이스든 형변환은 무조건적으로 필요하게 됩니다. 또한 String을 UUID으로 변환해야 하는 경우도 종종 발생합니다.")]),t._v(" "),e("p",[t._v("Golang에서의 형변환은 아래와 같은 방법으로 이루어집니다.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ValueThatWillBeConverted "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int8")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TypeUint64Variable "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("\nTypeUint64Variable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uint64")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ValueThatWillBeConverted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nUUID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" uuid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b749308a-5bda-4113-8866-f090259e5024"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("UUID와 관련된 형변환은 "),e("a",{attrs:{href:"https://stackoverflow.com/questions/62952279/how-to-convert-a-uuid-string-into-uuid-type",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to convert a UUID string into UUID type"),e("OutboundLink")],1),t._v("를 참고하시면 더 자세히 확인하실 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"참고한-자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고한-자료"}},[t._v("#")]),t._v(" 참고한 자료")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://velog.io/@vamos_eon/go-vartypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang 기초 (3) : 변수와 자료형에 대하여"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://johngrib.github.io/wiki/golang-types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang의 타입 - Go type"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.geeksforgeeks.org/data-types-in-go/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Types in Go"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);