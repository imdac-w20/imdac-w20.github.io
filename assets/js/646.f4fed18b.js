(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{861:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("CSS (and HTML) is a render blocking resource.  That is, a page can’t be rendered until style sheets are processed.  Users expect pages to render quickly and in the case of larger and more complex sites, the time to load and time to render should be managed through various optimization techniques.")]),t._v(" "),a("p",[t._v("The critical rendering path is understanding what resources are needed to provide the fastest render within the current context of the user. An example of this would be loading the style sheet for a desktop viewport when the user is on a mobile device.")]),t._v(" "),a("p",[t._v("Optimizing CSS performance is an entire course unto itself but for this module we will focus on re-tasking media queries to conditionally load style sheets instead of including them in one style sheet.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("Review the following material and be sure to download the lesson file.")]),t._v(" "),a("ul",[a("li",[t._v("Read "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path",target:"_blank",rel:"noopener noreferrer"}},[t._v("Critical Rendering Path  |  Web Fundamentals  |  Google Developers"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Read "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measuring the Critical Rendering Path  |  Web Fundamentals"),a("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3.org/TR/filter-effects-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C - Filter Effects Module Level 1"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path",target:"_blank",rel:"noopener noreferrer"}},[t._v("Critical Rendering Path  |  Web Fundamentals  |  Google Developers"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"the-critical-rendering-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-critical-rendering-path","aria-hidden":"true"}},[this._v("#")]),this._v(" The Critical Rendering Path")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preamble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preamble","aria-hidden":"true"}},[this._v("#")]),this._v(" Preamble")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[this._v("#")]),this._v(" Use")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Style sheets are loaded using the "),e("code",[this._v("<link>")]),this._v(" element in the "),e("code",[this._v("<head>")]),this._v("of an html document.  Typically we’ve either seen one style sheet used for all styles or we’ve used the "),e("code",[this._v("@import")]),this._v(" rule to include style sheets into others. Either way the effect is the same in that rendering is delayed until the style sheets are loaded.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<link>")]),this._v(" offers us a "),e("code",[this._v("media")]),this._v(" attribute that like media queries in our style sheets, offers a conditional approach to loading.  The difference being that when a page is loaded for a mobile device (assuming we’re using a mobile-first approach)  the remaining style sheets are "),e("strong",[this._v("not")]),this._v(" loaded.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In addition to leveraging the advantage of using conditional loading there’s the added benefit of concurrent loading when using "),e("code",[this._v("<link>")]),this._v(" elements.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“UTF-8”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <meta name=“viewport” content=“width=device-width,initial-scale=1.0”>\n    <meta http-equiv=“X-UA-Compatible” content=“ie=edge”>\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("RWD II | CSS Modularity"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“stylesheet”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“text/css”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“css/media/media-960.css”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“(min-width:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("960px)”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“stylesheet”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“text/css”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“css/media/media-1280.css”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“(min-width:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("1280px)”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"further-review"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-review","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Review")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lesson-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lesson-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Lesson File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/docs/mtm6201/css-modularity.zip"}},[this._v("CSS Best Practices Lesson File")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=n.exports}}]);