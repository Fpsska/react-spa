(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(18),s=a.n(n),i=a(12),o=a(10),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},u=a(17),d=a(25),j=a(26),b=a(6),O=a(3),_="ACTION_FETCH_CARDS",m="ACTION_FETCH_CARDS_DATA_TOGGLE",p="ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS",f="ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE",h="ACTION_SET_GIF_DATA",x="ACTION_FETCH_GIF_DATA_TOGGLE",v="ACTION_SET_GIF_DATA_ERROR_STATUS",N="ACTION_SET_GIF_DATA_ERROR_MESSAGE",g="ACTION_SET_LIKED_CARDS_DATA",y="ACTION_SET_FAVOURITE_STATUS",T="ACTION_SET_NOTIFICATION_VISIBLE_STATUS",E="ACTION_SORT_CARDS_BY_PRICE",S="ACTION_SORT_CARDS_BY_AGE",C="ACTION_SET_FILTERED_CARDS_DATA_LENGTH",A="ACTION_SET_BUTTON_SORTED_STATUS",R=function(e){return{type:_,payload:e}},w=function(e){return{type:m,payload:{value:e}}},F=function(e){return{type:f,payload:{value:e}}},k=function(e){return{type:h,payload:e}},D=function(e){return{type:x,payload:{value:e}}},I=function(e){return{type:N,payload:{value:e}}},L=function(e){return{type:T,payload:{status:e}}},V=function(e,t){return{type:y,payload:{id:e,status:t}}},B={cards:[],gifData:[],likedCardsData:[],filteredCardsData:[],filteredCardsDataLength:0,sortButtons:[{id:"price",text:"Price",isSorted:!1},{id:"age",text:"Age",isSorted:!1}],isCardsDataFetching:!0,isCardsDataFetchError:!1,cardsDataFetchErrorMessage:"error from fetchCardsData thunk",isGifDataFetching:!0,isGifDataFetchError:!1,gifDataFetchErrorMessage:"error from fetchGifData thunk",isNotificationVisible:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(O.a)(Object(O.a)({},e),{},{cards:[].concat(Object(b.a)(e.cards),Object(b.a)(t.payload))});case m:return Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetching:t.payload.value});case p:return Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetchError:t.payload.value});case f:return Object(O.a)(Object(O.a)({},e),{},{cardsDataFetchErrorMessage:t.payload.value});case h:return Object(O.a)(Object(O.a)({},e),{},{gifData:t.payload});case x:return Object(O.a)(Object(O.a)({},e),{},{isGifDataFetching:t.payload.value});case v:return Object(O.a)(Object(O.a)({},e),{},{isGifDataFetchError:t.payload.value});case N:return Object(O.a)(Object(O.a)({},e),{},{gifDataFetchErrorMessage:t.payload.value});case y:return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload.id?Object(O.a)(Object(O.a)({},e),{},{isFavourite:t.payload.status}):e}))});case g:return Object(O.a)(Object(O.a)({},e),{},{likedCardsData:e.cards.filter((function(e){return!0===e.isFavourite}))});case T:return Object(O.a)(Object(O.a)({},e),{},{isNotificationVisible:t.payload.status});case E:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,a){return t.payload.status?a.price-e.price:e.price-a.price})))});case S:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,a){return t.payload.status?parseInt(a.age,10)-parseInt(e.age,10):parseInt(e.age,10)-parseInt(a.age,10)})))});case C:return Object(O.a)(Object(O.a)({},e),{},{filteredCardsDataLength:t.payload});case A:return Object(O.a)(Object(O.a)({},e),{},{sortButtons:e.sortButtons.map((function(e){return e.id===t.payload.id?Object(O.a)(Object(O.a)({},e),{},{isSorted:t.payload.status}):e}))});default:return e}},G="ACTION_CHANGE_BURGER_VISIBLE_STATUS",P="ACTION_CHANGE_BURGER_OPENED_STATUS",U="ACTION_SET_INPUT_VALUE",H="ACTION_CHANGE_MAIN_PAGE_STATUS",z="ACTION_CHANGE_OVERVIEW_PAGE_STATUS",W=function(e){return{type:G,payload:e}},Y=function(e){return{type:P,payload:e}},$=function(e){return{type:U,payload:e}},q=function(e){return{type:H,payload:e}},J={headerLinks:[{id:1,text:"Main",link:"/Cats-Store/"},{id:2,text:"Favourite",link:"Favourite"},{id:3,text:"Live",link:"Live"},{id:4,text:"Profile",link:"Profile"}],isBurgerHidden:!0,isBurgerOpen:!1,isBodyScrolling:!0,isHomePage:!0,isOverviewPage:!1,emailValue:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(O.a)(Object(O.a)({},e),{},{isBurgerHidden:t.payload});case P:return Object(O.a)(Object(O.a)({},e),{},{isBurgerOpen:t.payload});case U:return Object(O.a)(Object(O.a)({},e),{},{emailValue:t.payload});case H:return Object(O.a)(Object(O.a)({},e),{},{isHomePage:t.payload});case z:return Object(O.a)(Object(O.a)({},e),{},{isOverviewPage:t.payload});default:return e}},Q="ACTION_SET_FORM_ALERT_VISIBLE_STATUS",X="ACTION_SET_FORM_SUBMIT_STATUS",Z=function(e){return{type:Q,payload:e}},ee={isFormAlertVisible:!1,isFormSubmitted:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(O.a)(Object(O.a)({},e),{},{isFormAlertVisible:t.payload});case X:return Object(O.a)(Object(O.a)({},e),{},{isFormSubmitted:t.payload});default:return e}},ae="ACTION_SET_CURRENT_RANGE_VALUE",ce="ACTION_SET_TOTAL_RANGE_VALUE",re=function(e){return{type:ae,payload:e}},ne={inputRangeTotalValue:0,inputRangeMinValue:0,currentRangeValue:0},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(O.a)(Object(O.a)({},e),{},{currentRangeValue:t.payload});case ce:return Object(O.a)(Object(O.a)({},e),{},{inputRangeTotalValue:t.payload});default:return e}},ie=Object(u.combineReducers)({cardReducer:M,headerReducer:K,formReducer:te,filterReducer:se}),oe=Object(u.createStore)(ie,Object(d.composeWithDevTools)(Object(u.applyMiddleware)(j.a))),le=a(4),ue=function(){return Object(i.b)()},de=i.c;function je(e,t){return t[(e=Math.abs(e))<=1?0:1]}a(37);var be=a(1),Oe=function(e){var t=e.isBurgerOpen,a=ue();return Object(be.jsxs)("button",{className:"menu",onClick:function(){a(Y(!t)),document.body.style.overflowY=t?"auto":"hidden"},children:[Object(be.jsx)("span",{className:t?"menu__line menu__line-top opened":"menu__line menu__line-top"}),Object(be.jsx)("span",{className:t?"menu__line menu__line-middle opened":"menu__line menu__line-middle"}),Object(be.jsx)("span",{className:t?"menu__line menu__line-bottom opened":"menu__line menu__line-bottom"})]})},_e=(a(39),function(){return Object(be.jsxs)("h1",{className:"loader",children:["Loading",Object(be.jsx)("span",{className:"loader__dot"}),Object(be.jsx)("span",{className:"loader__dot"}),Object(be.jsx)("span",{className:"loader__dot"})]})}),me=a(5),pe=function(e){var t=e.link,a=e.text,c=ue();return Object(be.jsx)("li",{className:"nav__menu_item",children:Object(be.jsx)(o.c,{className:"nav__menu_link",to:t,state:a.toLocaleLowerCase(),onClick:function(){return c(Y(!1)),void(document.body.style.overflowY="auto")},children:a})})},fe=(a(40),function(e){var t=e.headerLinks,a=e.role;return Object(be.jsx)("nav",{className:a?"nav ".concat(a):"nav",children:Object(be.jsx)("ul",{className:"nav__menu",children:t.map((function(e){return Object(be.jsx)(pe,Object(O.a)({},e),e.id)}))})})}),he=(a(41),function(e){var t=e.headerLinks,a=e.isBurgerOpen,r=ue();return Object(c.useEffect)((function(){var e=function(e){a&&"Escape"===e.code&&r(Y(!1))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a]),Object(be.jsx)("div",{className:a?"burger active":"burger",children:Object(be.jsx)(fe,{headerLinks:t,role:"burger__nav"})})}),xe=function(){var e=de((function(e){return e.headerReducer})),t=e.headerLinks,a=e.isBurgerOpen,r=Object(c.useState)(window.innerWidth),n=Object(me.a)(r,2),s=n[0],i=n[1],o=Object(c.useState)(800),l=Object(me.a)(o,1)[0],u=ue();return Object(c.useEffect)((function(){var e=function(){i(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((function(){u(W(!(s<=l)))}),[s,l]),Object(be.jsx)(be.Fragment,{children:s<=l?Object(be.jsx)(he,{headerLinks:t,isBurgerOpen:a}):Object(be.jsx)(fe,{headerLinks:t,role:"header__nav"})})},ve=a.p+"static/media/logo.c8358bcd.svg",Ne=function(e){var t=e.children;return Object(be.jsx)("h1",{className:"header__title",children:t})},ge=(a(42),function(){var e=de((function(e){return e.headerReducer})),t=e.isBurgerHidden,a=e.isBurgerOpen,c=de((function(e){return e.cardReducer})),r=c.cards,n=c.filteredCardsDataLength,s=c.isCardsDataFetching,i=je(r.length,["cat","cats"]),o=je(n,["cat","cats"]),l=Object(le.f)().state;return Object(be.jsx)("header",{className:"header",children:Object(be.jsxs)("div",{className:"container",children:[Object(be.jsxs)("section",{className:"header__section",children:[Object(be.jsx)("a",{className:"header__logo logo",href:"#",onClick:function(e){return e.preventDefault()},children:Object(be.jsx)("img",{className:"logo__image",src:ve,alt:"logo"})}),Object(be.jsx)(xe,{}),Object(be.jsx)(be.Fragment,{children:!t&&Object(be.jsx)(Oe,{isBurgerOpen:a})}),Object(be.jsxs)("div",{className:"header__telephone telephone",children:[Object(be.jsx)("a",{className:"telephone__number",href:"tel:+544 3490 00000",children:"+544 3490 00000"}),Object(be.jsx)("span",{className:"telephone__description",children:"Call soon!"})]})]}),Object(be.jsx)(be.Fragment,{children:s?Object(be.jsx)(_e,{}):Object(be.jsx)(Ne,{children:function(e){switch(e){case"main":return"Found ".concat(r.length," ").concat(i);case"favourite":return"Selected ".concat(n," ").concat(o);default:return"Have a good day ;)"}}(l)})})]})})}),ye=(a(43),function(){var e=de((function(e){return e.headerReducer})).emailValue,t=de((function(e){return e.formReducer})),a=t.isFormAlertVisible,r=t.isFormSubmitted,n=Object(c.useState)(!1),s=Object(me.a)(n,2),i=s[0],o=s[1],l=Object(c.useRef)(null),u=ue(),d=function(e){e.preventDefault(),u(Z(!0)),u({type:X,payload:!0})};return Object(c.useEffect)((function(){r&&!a&&(l.current.reset(),u($("")),o(!0),setTimeout((function(){o(!1)}),1e4))}),[a,r]),Object(be.jsx)("footer",{className:"footer",children:Object(be.jsx)("div",{className:"container",children:Object(be.jsxs)("section",{className:"footer__wrapper",children:[Object(be.jsxs)("article",{className:"footer__description",children:[Object(be.jsx)("h2",{className:"footer__title",children:"Hurry up to buy!"}),Object(be.jsx)("p",{className:"footer__subtitle",children:"Subscribe and catch all the promotions"})]}),Object(be.jsxs)("form",{ref:l,className:"form",onSubmit:function(e){return d(e)},children:[Object(be.jsxs)("div",{className:"form__controls",children:[Object(be.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",disabled:i,required:!0,value:e,onChange:function(e){return u($(e.target.value))}}),Object(be.jsx)("button",{className:"form__button button",type:"submit",disabled:i,children:"Subscribe"})]}),Object(be.jsxs)("label",{className:"form__cheakbox-label",children:["Subscribe to news",Object(be.jsx)("input",{className:"form__cheakbox-input",type:"checkbox",disabled:i,required:!0}),Object(be.jsx)("span",{className:"form__cheakbox-fake"})]})]})]})})})}),Te=a(14),Ee=a.n(Te),Se=a(19),Ce=a.p+"static/media/no_photo.bb351cb8.png",Ae=function(){var e=Math.floor(10*Math.random());return function(){var t=Object(Se.a)(Ee.a.mark((function t(a){var c,r,n;return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=".concat(e));case 3:return(c=t.sent).ok||(a(F("Error: There are some problems with response of breeds data")),console.error("There are some problems with response")),t.next=7,c.json();case 7:r=t.sent,n=[],r.forEach((function(e){e.image&&e.image||(e.image={url:Ce}),n.push({id:"".concat(Math.random()+e.id),image:e.image.url,name:e.name,location:e.origin,paw:"4",age:"".concat(Math.floor(12*Math.random())+1," mth."),price:+Math.floor(1e4*Math.random()),discount:"-".concat(Math.floor(60*Math.random())+10,"%"),discountStatus:Boolean(Math.round(Math.random())),cardStatus:Boolean(Math.round(Math.random())),isFavourite:!1})})),a(R(n)),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),a(F("Error: ".concat(t.t0.message," breeds data."))),a({type:p,payload:{value:!0}}),console.error(t.t0.message);case 18:return t.prev=18,setTimeout((function(){a(w(!1))}),500),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,13,18,21]])})));return function(e){return t.apply(this,arguments)}}()},Re=function(){return function(){var e=Object(Se.a)(Ee.a.mark((function e(t){var a,c,r;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.thecatapi.com/v1/images/search?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=8&size=full&mime_types=gif");case 3:return(a=e.sent).ok||(t(I("Error: There are some problems with response of gifs data")),console.error("There are some problems with response")),e.next=7,a.json();case 7:c=e.sent,r=[],c.forEach((function(e){r.push({id:"".concat(Math.random()+e.id),image:e.url})})),t(k(r)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t(I("Error: ".concat(e.t0.message," gifs data."))),t({type:v,payload:{value:!0}}),console.error(e.t0.message);case 18:return e.prev=18,setTimeout((function(){t(D(!1))}),500),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,13,18,21]])})));return function(t){return e.apply(this,arguments)}}()},we=a(20),Fe=(a(45),function(){var e=ue();return Object(c.useEffect)((function(){var t=function(t){"Escape"===t.code&&e(Z(!1))};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),Object(be.jsx)("div",{className:"form-alert",role:"alert",children:Object(be.jsxs)("div",{className:"form-alert__wrapper",children:[Object(be.jsxs)("div",{className:"form-alert__description",children:[Object(be.jsx)(we.a,{color:"#e52d2d",size:"24px"}),Object(be.jsx)("p",{className:"form-alert__text",children:"Sorry! Function temporarily unavailable"})]}),Object(be.jsx)("div",{className:"form-alert__controls",children:Object(be.jsx)("button",{className:"form-alert__button",autoFocus:!0,onClick:function(){e(Z(!1))},children:"Ok"})})]})})}),ke=function(){var e=de((function(e){return e.formReducer})).isFormAlertVisible,t=Object(i.b)();return Object(c.useEffect)((function(){t(Ae()),t(Re())}),[]),Object(be.jsxs)("div",{className:"page",children:[Object(be.jsx)(be.Fragment,{children:e&&Object(be.jsx)(Fe,{})}),Object(be.jsx)(ge,{}),Object(be.jsx)("main",{className:"main",children:Object(be.jsx)(le.a,{})}),Object(be.jsx)(ye,{})]})},De=a(16),Ie=a(27),Le=(a(46),function(e){var t=e.id,a=e.image,r=e.name,n=e.location,s=e.age,i=e.paw,o=e.price,l=e.discount,u=e.isFavourite,d=e.cardStatus,j=e.discountStatus,b=(e.currentRangeValue,Object(c.useRef)(null)),O=ue();return Object(c.useEffect)((function(){b.current.classList.remove("unlike")}),[]),Object(be.jsxs)("article",{className:"card",children:[Object(be.jsxs)("div",{className:"card__preview",children:[Object(be.jsxs)("div",{className:"card__icons",children:[Object(be.jsx)(be.Fragment,{children:j&&Object(be.jsx)("span",{className:"card__icons_discount",children:l})}),Object(be.jsx)("button",{className:u?"card__icons_button like":"card__icons_button unlike",ref:b,disabled:!d,onClick:function(){O(V(t,!u)),O({type:g})},"aria-label":"add to favourite",children:Object(be.jsx)(Ie.a,{color:"#fff",size:"42px"})})]}),Object(be.jsx)("img",{className:"card__image",src:a,alt:"cat",onError:function(e){e.target.src=Ce,e.target.onerror=null}})]}),Object(be.jsxs)("div",{className:"card__information",children:[Object(be.jsx)("span",{className:"card__name",children:r}),Object(be.jsxs)("ul",{className:"card__description description",children:[Object(be.jsxs)("li",{className:"description__item description__item_location",children:["Location: ",Object(be.jsx)("br",{}),Object(be.jsx)("strong",{children:n})]}),Object(be.jsxs)("li",{className:"description__item description__item_age",children:[Object(be.jsx)("span",{className:"bold",children:s})," ",Object(be.jsx)("br",{})," Age"]}),Object(be.jsxs)("li",{className:"description__item description__item_paw",children:[Object(be.jsx)("span",{className:"bold",children:i})," ",Object(be.jsx)("br",{})," Paws count"]})]}),Object(be.jsx)("span",{className:"card__price",children:"".concat(o," USD")})]}),Object(be.jsx)("button",{className:d?"card__button button":"card__button-sold button",children:d?"Buy":"Sold"})]})}),Ve=function(){var e=de((function(e){return e.cardReducer})).cards,t=(de((function(e){return e.headerReducer})).isHomePage,de((function(e){return e.filterReducer})).currentRangeValue);return Object(be.jsx)("div",{className:"gallery__cards",children:e.map((function(e){return Object(be.jsx)(Le,Object(O.a)(Object(O.a)({},e),{},{currentRangeValue:t}),e.id)}))})},Be=function(e){var t=e.id,a=e.text,r=e.isCardsDataFetching,n=e.isCardsDataFetchError,s=Object(c.useState)(!1),i=Object(me.a)(s,2),o=i[0],l=i[1],u=ue(),d=function(e){l(!o),u(function(e,t){return{type:A,payload:{id:e,status:t}}}(t,o)),u("price"===t?function(e,t){return{type:E,payload:{id:e,status:t}}}(t,o):function(e,t){return{type:S,payload:{id:e,status:t}}}(t,o))};return Object(be.jsxs)("button",{className:"controls__menu",disabled:r||n,"aria-label":"sort by ".concat(t),onClick:function(e){return d()},children:[Object(be.jsx)("span",{className:"controls__menu_text",children:a}),Object(be.jsx)("span",{children:o?Object(be.jsx)(De.b,{color:"#000",size:"26px"}):Object(be.jsx)(De.a,{color:"#000",size:"26px"})})]})},Me=(a(47),function(){var e=de((function(e){return e.cardReducer})),t=e.isCardsDataFetching,a=e.isCardsDataFetchError,c=e.sortButtons;return Object(be.jsx)("div",{className:"controls__wrapper",children:c.map((function(e){return Object(be.jsx)(Be,Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetching:t,isCardsDataFetchError:a}),e.id)}))})}),Ge=(a(48),function(){return Object(be.jsx)("div",{className:"preloader",children:Object(be.jsxs)("div",{className:"lds-roller",children:[Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{}),Object(be.jsx)("div",{})]})})}),Pe=a(28),Ue=(a(49),function(){var e=de((function(e){return e.cardReducer})).likedCardsData,t=Object(c.useRef)(null),a=ue();return Object(c.useEffect)((function(){var c,r,n;e.length>1&&e.length%2===0&&(a(L(!0)),null===(c=t.current)||void 0===c||c.classList.add("visible"),null===(r=t.current)||void 0===r||r.classList.add("opacity"),null===(n=t.current)||void 0===n||n.classList.remove("hide"),setTimeout((function(){var e,c;a(L(!1)),null===(e=t.current)||void 0===e||e.classList.remove("visible"),null===(c=t.current)||void 0===c||c.classList.add("hide")}),3500));0===e.length&&a(L(!1))}),[e]),Object(be.jsx)("div",{ref:t,className:"alert",role:"alert",children:Object(be.jsxs)("div",{className:"alert__wrapper",children:[Object(be.jsx)("div",{className:"alert__notification",children:Object(be.jsx)(o.b,{to:"Favourite",onClick:function(){a(q(!1))},"aria-label":"redirect to basket",children:Object(be.jsx)(we.a,{color:"#000",size:"22px"})})}),Object(be.jsxs)("div",{className:"alert__information",children:[Object(be.jsx)("span",{className:"alert__message",children:"Visit to Favourite page!"}),Object(be.jsx)("span",{className:"alert__count",children:"".concat(e.length," in basket!")})]}),Object(be.jsx)("button",{className:"alert__button",onClick:function(){var e,c;a(L(!1)),null===(e=t.current)||void 0===e||e.classList.remove("visible"),null===(c=t.current)||void 0===c||c.classList.add("hide")},"aria-label":"close this modal",children:Object(be.jsx)(Pe.a,{color:"#000",size:"18px"})})]})})}),He=function(){var e=de((function(e){return e.cardReducer})),t=e.isCardsDataFetching,a=e.isCardsDataFetchError,r=e.cardsDataFetchErrorMessage,n=Object(i.b)(),s=Object(c.useRef)(null);return Object(be.jsxs)("div",{ref:s,className:"section",children:[Object(be.jsx)("div",{className:"container",children:Object(be.jsxs)("section",{className:"gallery",children:[Object(be.jsxs)("div",{className:"controls",children:[Object(be.jsx)("span",{className:"controls__title",children:"Sorted by:"}),Object(be.jsx)(Me,{})]}),Object(be.jsxs)("div",{className:"gallery__wrapper",children:[Object(be.jsx)(be.Fragment,{children:t?Object(be.jsx)(Ge,{}):a?Object(be.jsx)("p",{className:"error",children:r}):Object(be.jsx)(Ve,{})}),Object(be.jsx)("button",{className:"gallery__button button",disabled:t||a,onClick:function(){n(Ae())},children:"Watch more"}),Object(be.jsx)("button",{className:"pagination",disabled:t||a,onClick:function(){s.current.scrollIntoView({block:"start",behavior:"smooth"})},"aria-label":"scroll top",children:Object(be.jsx)(De.b,{color:"#fff",size:"36px","aria-label":"scroll top"})})]})]})}),Object(be.jsx)(Ue,{})]})},ze=a(11),We=a(24);a(50);var Ye=function(){var e=de((function(e){return e.filterReducer})),t=e.inputRangeTotalValue,a=e.inputRangeMinValue,r=e.currentRangeValue,n=Object(c.useRef)(null),s=Object(c.useRef)(null),i=Object(c.useRef)(null),o=ue();return Object(c.useEffect)((function(){o(re(t)),i.current.style.width="".concat(100,"%"),s.current.style.left="".concat(100,"%")}),[]),Object(be.jsxs)("form",{className:"filter",children:[Object(be.jsx)("input",{ref:n,className:"filter__input",type:"range",step:"1",value:r,min:a,max:t,onChange:function(e){return function(e){var c=+e.target.value;o(re(c)),i.current.style.width="".concat(100*(c-a)/(t-a),"%"),s.current.style.left="".concat(100*(c-a)/(t-a),"%")}(e)}}),Object(be.jsx)("span",{className:"filter__progress",children:Object(be.jsx)("span",{ref:i,className:"filter__progress-fill"})}),Object(be.jsx)("span",{ref:s,className:"filter__current",children:r}),Object(be.jsxs)("div",{className:"filter__indicators",children:[Object(be.jsx)("span",{className:"filter__counter filter__counter--min",children:"".concat(a," $")}),Object(be.jsx)("span",{className:"filter__counter filter__counter--max",children:"".concat(t," $")})]})]})},$e=a.p+"static/media/empty.cd1884f0.png";a(51),a(52),a(53);ze.b.use([ze.a]);var qe=function(){var e=de((function(e){return e.filterReducer})).currentRangeValue,t=de((function(e){return e.cardReducer})).likedCardsData,a=Object(c.useState)(t),r=Object(me.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(!0),o=Object(me.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(!0),j=Object(me.a)(d,2),_=j[0],m=j[1],p=Object(c.useState)(0),f=Object(me.a)(p,2),h=f[0],x=f[1],v=Object(c.useState)({320:{slidesPerView:1,spaceBetween:30},360:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2.5,spaceBetween:30}}),N=Object(me.a)(v,1)[0],g=ue();return Object(c.useEffect)((function(){var a;s((a=e,t.filter((function(e){return e.price<=a})))),0===t.length?u(!0):u(!1);var c=t.map((function(e){return e.price})),r=Math.max.apply(Math,Object(b.a)(c));g({type:ce,payload:r})}),[t,e]),Object(c.useEffect)((function(){var e;0===n.length?m(!0):m(!1),g((e=n.length,{type:C,payload:e}))}),[n]),Object(c.useEffect)((function(){var e=n.reduce((function(e,t){return e+t.price}),0);x(e)}),[n]),Object(be.jsx)("div",{className:"section",children:Object(be.jsx)("section",{className:"basket",children:Object(be.jsxs)("div",{className:"basket__wrapper",children:[!l&&Object(be.jsxs)("div",{className:"basket__section",children:[Object(be.jsx)("div",{className:"basket__price",children:Object(be.jsxs)("div",{className:"price",children:[Object(be.jsx)("h3",{className:"price__text",children:"Total price:"}),Object(be.jsxs)("div",{className:"price__section",children:[Object(be.jsx)("span",{className:"price__count",children:h}),Object(be.jsx)("span",{className:"price__currency",children:"$"})]})]})}),Object(be.jsx)("div",{className:"basket__filter",children:Object(be.jsx)(Ye,{})})]}),Object(be.jsx)("div",{className:_?"basket__slider empty":"basket__slider",children:_?Object(be.jsxs)("div",{className:"empty",children:[Object(be.jsx)("img",{className:"empty__preview",src:$e,alt:"empty"}),Object(be.jsx)("h4",{className:"empty__text",children:"No matches"})]}):Object(be.jsx)(We.a,{className:"mySwiper",slidesPerView:3,spaceBetween:5,breakpoints:N,children:n.map((function(t){return Object(be.jsx)(We.b,{children:Object(be.jsx)(Le,Object(O.a)(Object(O.a)({},t),{},{currentRangeValue:e}),t.id)},t.id)}))})})]})})})},Je=(a(54),function(){var e=de((function(e){return e.cardReducer})),t=e.gifData,a=e.isGifDataFetching,c=e.isGifDataFetchError,r=e.gifDataFetchErrorMessage,n=Object(i.b)();return Object(be.jsx)("div",{className:"section",children:Object(be.jsx)("div",{className:"container container--middle",children:Object(be.jsx)("section",{className:"overview",children:Object(be.jsxs)("div",{className:"overview__wrapper",children:[a?Object(be.jsx)("div",{className:"overview__gallery",children:Object(be.jsx)(Ge,{})}):c?Object(be.jsx)("p",{className:"error",children:r}):Object(be.jsx)("div",{className:"overview__gallery",children:t.map((function(e){return Object(be.jsx)("div",{className:"overview__card",children:Object(be.jsx)("img",{className:"overview__image",src:e.image,alt:"funny gifts"})},e.id)}))}),Object(be.jsx)("button",{className:"overview__button",onClick:function(){n(Re()),n(D(!0))},disabled:a||c,children:"Watch others"})]})})})})}),Ke=a.p+"static/media/in_process.448aa860.png",Qe=function(){var e=Object(le.g)(),t=ue();return Object(be.jsx)("div",{className:"section",children:Object(be.jsxs)("article",{className:"section__wrapper",children:[Object(be.jsx)("img",{className:"section__image",src:Ke,alt:"cat"}),Object(be.jsx)("h1",{className:"section__title",children:"PROFILE PAGE IN PROCESS"}),Object(be.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(be.jsx)("span",{children:Object(be.jsx)(o.b,{to:"/Cats-Store",onClick:function(){t(q(!0)),e("/Cats-Store",{replace:!0})},children:"age"})})]})]})})},Xe=a.p+"static/media/no_found.bee11de8.png",Ze=function(){var e=Object(le.g)(),t=ue();return Object(be.jsx)("div",{className:"section",children:Object(be.jsxs)("article",{className:"section__wrapper",children:[Object(be.jsx)("img",{className:"section__image",src:Xe,alt:"404 error"}),Object(be.jsx)("h1",{className:"section__title section__title-error",children:"404"}),Object(be.jsxs)("p",{className:"section__link",children:["Sorry, this page doesn't exist, return to home"," ",Object(be.jsx)("span",{children:Object(be.jsx)(o.b,{to:"/Cats-Store",onClick:function(){t(q(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},et=(a(55),a(56),a(57),function(){return Object(be.jsx)("div",{className:"App",children:Object(be.jsx)(le.d,{children:Object(be.jsxs)(le.b,{path:"/Cats-Store",element:Object(be.jsx)(ke,{}),children:[Object(be.jsx)(le.b,{index:!0,element:Object(be.jsx)(He,{})}),Object(be.jsx)(le.b,{path:"Favourite",element:Object(be.jsx)(qe,{})}),Object(be.jsx)(le.b,{path:"Live",element:Object(be.jsx)(Je,{})}),Object(be.jsx)(le.b,{path:"Profile",element:Object(be.jsx)(Qe,{})}),Object(be.jsx)(le.b,{path:"*",element:Object(be.jsx)(Ze,{})})]})})})});s.a.render(Object(be.jsx)(r.a.StrictMode,{children:Object(be.jsx)(o.a,{children:Object(be.jsx)(i.a,{store:oe,children:Object(be.jsx)(et,{})})})}),document.getElementById("root")),l()}},[[58,1,2]]]);
//# sourceMappingURL=main.c6161f0d.chunk.js.map