(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],[,,,function(e,t,n){e.exports={container:"CountryList_container___3pKw",select_dropdown:"CountryList_select_dropdown__NTDkI",select_dropdown_button:"CountryList_select_dropdown_button__2Y6oo",select_dropdown_list:"CountryList_select_dropdown_list__sOgLc",active:"CountryList_active__2Rocl","select-dropdown":"CountryList_select-dropdown__1McJD","select-dropdown__list-item":"CountryList_select-dropdown__list-item__3F48A",select_dropdown_list_item:"CountryList_select_dropdown_list_item___ElCv",elect_dropdown_list_item:"CountryList_elect_dropdown_list_item__1NpFn",selected:"CountryList_selected__2bsXZ"}},function(e,t,n){e.exports={search:"Search_search__2WvZK",input:"Search_input__32Edx",close:"Search_close__wBjjv"}},function(e,t,n){e.exports={details:"CountryDetails_details__3sfyI",display:"CountryDetails_display__OboVa",info:"CountryDetails_info__2ibgq"}},,,function(e,t,n){e.exports={card:"Card_card__1pf68"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(7),r=n.n(i),o=(n(14),n(9)),a=n(2),l=n(3),u=n.n(l),d=n(0),j=function(e){var t=Object(c.useState)({}),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)([]),o=Object(a.a)(r,2),l=o[0],j=o[1],_=Object(c.useState)(!1),b=Object(a.a)(_,2),O=b[0],f=b[1];if(Object(c.useEffect)((function(){document.title=s.name||"Countries finder",e.onClick(s)}),[s,e]),Object(c.useEffect)((function(){return function(e){var t=e.countries.filter((function(t){return t.name.toLowerCase().includes(e.searchValue.toLowerCase())}));j(t)}(e),function(){j(e.countries)}}),[e.searchValue,e]),e.onLoad)return Object(d.jsx)("div",{className:u.a.container,children:Object(d.jsx)("span",{children:"Loading..."})});function h(){return f(!0!==O)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:u.a.container,children:Object(d.jsxs)("div",{className:u.a.select_dropdown,children:[Object(d.jsx)("button",{className:u.a.select_dropdown_button,onClick:function(){return h()},children:Object(d.jsx)("span",{className:u.a.select_dropdown,children:s.name?s.name:"Select country"})}),Object(d.jsx)("ul",{className:O?[u.a.select_dropdown_list,u.a.active].join(" "):u.a.select_dropdown_list,children:l.map((function(e){return Object(d.jsx)("li",{className:u.a.select_dropdown_list_item,onClick:function(){i(e),h()},children:e.name},e.id)}))})]})})})},_=n(4),b=n.n(_),O=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(""),o=Object(a.a)(r,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){return i(s),console.log(s),e.onClick(s),function(){i("")}}),[s,e]),Object(d.jsxs)("div",{className:b.a.search,children:[Object(d.jsx)("span",{children:"Countries finder"}),Object(d.jsxs)("div",{className:b.a.input,children:[Object(d.jsx)("input",{placeholder:"Search for a country",value:s,onChange:function(e){i(e.currentTarget.value)}}),s&&Object(d.jsx)("div",{className:b.a.close_wrapper,children:Object(d.jsx)("span",{className:b.a.close,onClick:function(){u(""),e.onClick(l),i(l)}})})]})]})},f=n(5),h=n.n(f),p=n(8),x=n.n(p),m=function(e){return Object(d.jsx)("div",{className:x.a.card,children:e.children})},C=function(e){var t=e.country,n=t.name,c=t.capital,s=t.flag,i=t.currencies;if(!n)return Object(d.jsx)("div",{className:h.a.display,children:"Nothing to display yet"});var r=i[0],o=r.name,a=r.symbol;return Object(d.jsxs)("div",{className:h.a.details,children:[Object(d.jsx)("h1",{children:"Country details"}),Object(d.jsx)("hr",{}),Object(d.jsx)(m,{children:Object(d.jsxs)("div",{className:h.a.info,children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)("img",{src:s,alt:n}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Capital city: ",c]}),Object(d.jsxs)("p",{children:["Currency: ",o,", symbol: ",a]})]})})]})};var v=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),r=Object(a.a)(i,2),l=r[0],u=r[1],_=Object(c.useState)(""),b=Object(a.a)(_,2),f=b[0],h=b[1],p=Object(c.useState)({}),x=Object(a.a)(p,2),m=x[0],v=x[1],y=Object(c.useState)(!1),w=Object(a.a)(y,2),g=w[0],N=w[1];return Object(c.useEffect)((function(){return u(!0),fetch("https://restcountries.eu/rest/v2/").then((function(e){return e.json()})).then((function(e){console.log("fetch");var t=[];for(var n in e){var c=Object(o.a)({id:n},e[n]);t.push(c)}return t})).then((function(e){s(e),u(!1)})).catch((function(e){console.log(e)})),function(){u(!1)}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(O,{countries:n,onClick:function(e){h(e)},onOpen:function(e){N(e)}})}),Object(d.jsx)("div",{className:"country_list",children:Object(d.jsx)(j,{countries:n,onLoad:l,searchValue:f,onClick:function(e){v(e)}})}),Object(d.jsx)("main",{children:Object(d.jsx)(C,{country:m,isOpen:g})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}],[[16,1,2]]]);
//# sourceMappingURL=main.cf7b161e.chunk.js.map