(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{226:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/CptPotato/helix-themes",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("CptPotato/helix-themes")]),s("OutboundLink")],1),t._v("에서 원하는 테마를 보고 설치할 수 있습니다.")]),t._v(" "),t._m(11)]),t._v(" "),t._m(12)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"_20231117-helix-editor-with-golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20231117-helix-editor-with-golang"}},[this._v("#")]),this._v(" 20231117 - Helix Editor with Golang")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"install-helix-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-helix-editor"}},[this._v("#")]),this._v(" Install Helix Editor")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ brew update "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("&&")]),this._v(" brew upgrade\n$ brew "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" helix\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"setting-golang-at-helix-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-golang-at-helix-editor"}},[this._v("#")]),this._v(" Setting Golang at Helix Editor")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"install-gopls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gopls"}},[this._v("#")]),this._v(" Install "),t("code",[this._v("gopls")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ go "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" golang.org/x/tools/gopls@latest\n")])])])},function(){var t=this._self._c;return t("p",[this._v("설치 이후 "),t("code",[this._v("$PATH")]),this._v(" 설정이 되어 있지 않는 경우, 실행이 되지 않을 수도 있음.")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ~/.zshrc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/Go/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"completion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#completion"}},[this._v("#")]),this._v(" Completion")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ hx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("--health")]),this._v(" go\nConfigured language servers:\n  ✓ gopls: /Users/park.hyunsang/Go/bin/gopls\nConfigured debug adapter: dlv\nBinary "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" debug adapter: /Users/park.hyunsang/Go/bin/dlv\nHighlight queries: ✓\nTextobject queries: ✓\nIndent queries: ✓\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"setting-themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-themes"}},[this._v("#")]),this._v(" Setting Themes")])},function(){var t=this._self._c;return t("li",[this._v("설치하여 압축 해제 이후 "),t("code",[this._v("~/.config/helix/themes")]),this._v("에 옮긴 다음에 "),t("code",[this._v("~/.config/helix/config.toml")]),this._v("에 다음과 같이 설정합니다.")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("theme")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kanabox_default"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 혹은")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("theme")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theme_name"')]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);