(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(13),r=c.n(a),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))},o=c(12),d=c(18),l=c(19),j=c(10),u=c(3),b="ACTION_SET_LIKED_CARDS_DATA",O="ACTION_SORT_CARDS_PRICE_DECREASE",h="ACTION_SORT_CARDS_PRICE_INCREASE",m="ACTION_SORT_CARDS_AGE_DECREASE",_="ACTION_SORT_CARDS_AGE_INCREASE",p="ACTION_FETCH_CARDS",x="ACTION_FETCH_TOGGLE",f="ACTION_SET_FETCH_ERROR_STATUS",g="ACTION_SET_FETCH_ERROR_MESSAGE",v=function(e){return{type:f,payload:{value:e}}},N=function(e){return{type:x,payload:{value:e}}},C=function(e,t){return{type:O,payload:{id:e,status:t}}},w=function(e,t){return{type:h,payload:{id:e,status:t}}},S=function(e,t){return{type:m,payload:{id:e,status:t}}},y=function(e,t){return{type:_,payload:{id:e,status:t}}},E=function(e,t){return{type:b,payload:{id:e,status:t}}},k={cards:[],likedCardsData:[],sortButtons:[{text:"\u0426\u0435\u043d\u0430",id:"price",isSorted:!1},{text:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",id:"age",isSorted:!1}],isFetching:!0,isFetchError:!1,fetchErrorMessage:"test"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{isFavourite:t.payload.status}):e})),likedCardsData:e.cards.filter((function(e){return!0===e.isFavourite}))});case p:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.concat(t.payload))});case x:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.payload.value});case g:return Object(u.a)(Object(u.a)({},e),{},{fetchErrorMessage:t.payload.value});case f:return Object(u.a)(Object(u.a)({},e),{},{isFetchError:t.payload.value});case O:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(t.price)-parseInt(e.price)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case h:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(e.price)-parseInt(t.price)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case m:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(t.age)-parseInt(e.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case _:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(e.age)-parseInt(t.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});default:return e}},A="ACTION_CHANGE_NAV_DISPLAY",F="ACTION_SET_INPUT_VALUE",R="ACTION_CHANGE_PAGE_STATUS",T="ACTION_CHANGE_BURGER_STATUS",I=function(e){return{type:T,payload:e}},B=function(e){return{type:R,payload:e}},M=function(e){return{type:A,payload:e}},P={headerLinks:[{id:1,text:"Main",link:"/Cats-Store/"},{id:2,text:"Favourite",link:"Favourite"},{id:3,text:"News",link:"News"},{id:4,text:"Profile",link:"Profile"}],isBurgerHidden:!0,isBurgerOpen:!1,isBodyScrolling:!0,isHomePage:!0,emailValue:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(u.a)(Object(u.a)({},e),{},{isBurgerHidden:t.payload});case F:return Object(u.a)(Object(u.a)({},e),{},{emailValue:t.payload});case R:return Object(u.a)(Object(u.a)({},e),{},{isHomePage:t.payload});case T:return Object(u.a)(Object(u.a)({},e),{},{isBurgerOpen:t.payload});default:return e}},D=Object(o.combineReducers)({cardReducer:L,headerReducer:H}),G=Object(o.createStore)(D,Object(d.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),V=c(4),U=c(8),W=c(2),Z=c(6),z=c(0),Y=function(e){switch(e.id){case"heart":return Object(z.jsx)("svg",{className:"icon__heart",width:"46",height:"42",viewBox:"0 0 46 42",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z",fill:"white"})});case"arrow":return Object(z.jsxs)("svg",{className:"icon__arrow",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("g",{clipPath:"url(#clip0)",children:Object(z.jsx)("path",{d:"M8.29764 3.99939L0.287559 12.0096C0.102145 12.1949 -8.06437e-08 12.4422 -6.91167e-08 12.7059C-5.75898e-08 12.9696 0.102145 13.2169 0.287559 13.4022L0.87731 13.9921C1.2616 14.3759 1.88618 14.3759 2.26988 13.9921L8.99627 7.2657L15.7301 13.9996C15.9155 14.1848 16.1627 14.2871 16.4263 14.2871C16.6901 14.2871 16.9373 14.1848 17.1228 13.9995L17.7124 13.4097C17.8979 13.2242 18 12.9771 18 12.7134C18 12.4497 17.8979 12.2023 17.7124 12.0171L9.69504 3.99939C9.50904 3.81368 9.26071 3.71168 8.99671 3.71227C8.73169 3.71168 8.48349 3.81368 8.29764 3.99939Z",fill:"white"})}),Object(z.jsx)("defs",{children:Object(z.jsx)("clipPath",{id:"clip0",children:Object(z.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0 18) rotate(-90)"})})})]});case"logo":return Object(z.jsxs)("svg",{className:"icon__logo",width:"78",height:"52",viewBox:"0 0 78 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M63.0559 15.8815L54.2119 15.8947L27.8012 40.7922H10.0354V23.4593L34.2348 0.848633L17.993 0.899213L0 17.6625V51.1511H34.0283L63.0418 23.5687L63.0559 15.8815Z",fill:"white"}),Object(z.jsx)("path",{d:"M43.9721 0.848633L14.9586 28.4318L14.9453 36.1182L23.7884 36.1049L50.1991 11.2075H67.9649V28.5404L43.7656 51.1511L60.0074 51.1013L78.0004 34.338V0.848633H43.9721Z",fill:"white"})]});case"arrow-sort":return Object(z.jsxs)("svg",{className:"icon__arrow-sort",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("g",{clipPath:"url(#clip0_5:133)",children:Object(z.jsx)("path",{d:"M8.0853 11.6669L14.7604 4.99166C14.9149 4.83727 15 4.63118 15 4.41142C15 4.19167 14.9149 3.98557 14.7604 3.83118L14.2689 3.3396C13.9487 3.01973 13.4282 3.01973 13.1084 3.3396L7.50311 8.94492L1.89157 3.33338C1.73706 3.17899 1.53109 3.09375 1.31146 3.09375C1.09158 3.09375 0.885606 3.17899 0.730973 3.33338L0.239635 3.82496C0.0851249 3.97947 3.76698e-06 4.18545 3.75737e-06 4.4052C3.74777e-06 4.62496 0.0851249 4.83105 0.239635 4.98544L6.9208 11.6669C7.0758 11.8216 7.28275 11.9066 7.50275 11.9061C7.7236 11.9066 7.93042 11.8216 8.0853 11.6669Z",fill:"black"})}),Object(z.jsx)("defs",{children:Object(z.jsx)("clipPath",{id:"clip0_5:133",children:Object(z.jsx)("rect",{width:"15",height:"15",fill:"white",transform:"translate(15) rotate(90)"})})})]});default:return Object(z.jsx)("svg",{className:"empty"})}},q=function(e){var t=e.isBurgerHidden,c=e.link,s=e.text,n=Object(V.b)();return Object(z.jsx)("li",{className:t?"nav__menu_item":"nav__menu_item-burger",children:Object(z.jsx)(U.c,{to:c,className:t?"nav__menu_link":"nav__menu_link-burger",onClick:function(){n(B(!1)),n(I(!1)),"Main"===s&&n(B(!0)),document.body.style.overflowY="auto"},children:s})})},J=function(e){var t=e.headerLinks,c=e.isBurgerHidden,n=Object(s.useMemo)((function(){return t.map((function(e){return Object(z.jsx)(q,{text:e.text,link:e.link,isBurgerHidden:c},e.id)}))}),[t]);return Object(z.jsx)("nav",{className:"nav",children:Object(z.jsx)("ul",{className:c?"nav__menu":"nav__menu-burger",children:n})})},K=(c(30),function(e){var t=e.headerLinks,c=e.isBurgerOpen,s=Object(V.b)(),n=function(){return document.body.style.paddingRight="".concat(window.innerWidth-document.body.clientWidth)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"menu",onClick:function(){s(I(!c)),document.body.style.overflowY=!0===c?"auto":"hidden",n()},children:[Object(z.jsx)("div",{className:c?"menu__line menu__line-top opened":"menu__line menu__line-top"}),Object(z.jsx)("div",{className:c?"menu__line menu__line-middle opened":"menu__line menu__line-middle"}),Object(z.jsx)("div",{className:c?"menu__line menu__line-bottom opened":"menu__line menu__line-bottom"})]}),Object(z.jsx)("div",{className:c?"burger active":"burger",children:Object(z.jsx)("div",{className:"burger__nav",children:Object(z.jsx)(J,{headerLinks:t})})})]})}),Q=(c(31),function(){var e=Object(V.c)((function(e){return e.headerReducer})),t=e.headerLinks,c=e.isBurgerHidden,n=e.isBurgerOpen,a=e.isHomePage,r=Object(V.c)((function(e){return e.cardReducer})),i=r.isFetching,o=r.isFetchError,d=r.cards,l=r.likedCardsData,j=Object(s.useState)("\u043a\u043e\u0442\u043e\u0432"),u=Object(Z.a)(j,2),b=u[0],O=u[1],h=Object(s.useState)("\u0412\u044b\u0431\u0440\u0430\u043d\u043e"),m=Object(Z.a)(h,2),_=m[0],p=m[1],x=Object(V.b)(),f=function(){window.innerWidth<800?x(M(!1)):window.innerWidth>800&&x(M(!0))};return Object(s.useLayoutEffect)((function(){return window.addEventListener("resize",f),window.addEventListener("load",f),function(){window.removeEventListener("resize",f),window.removeEventListener("load",f)}}),[]),Object(s.useEffect)((function(){0===l.length&&(p("\u0412\u044b\u0431\u0440\u0430\u043d\u043e"),O("\u043a\u043e\u0442\u043e\u0432")),1===l.length&&(p("\u0412\u044b\u0431\u0440\u0430\u043d"),O("\u043a\u043e\u0442")),l.length>=2&&l.length<=4&&(p("\u0412\u044b\u0431\u0440\u0430\u043d\u043e"),O("\u043a\u043e\u0442\u0430")),l.length>=5&&(p("\u0412\u044b\u0431\u0440\u0430\u043d\u043e"),O("\u043a\u043e\u0442\u043e\u0432"))}),[o,l]),Object(z.jsx)("header",{className:"header",children:Object(z.jsxs)("div",{className:"container",children:[Object(z.jsxs)("div",{className:"header__section",children:[Object(z.jsx)("span",{className:"icon",children:Object(z.jsx)(Y,{id:"logo"})}),Object(z.jsx)(z.Fragment,{children:c?Object(z.jsx)(J,{headerLinks:t,isBurgerHidden:c}):Object(z.jsx)(K,{headerLinks:t,isBurgerOpen:n})}),Object(z.jsxs)("div",{className:"header__telephone telephone",children:[Object(z.jsx)("a",{className:"telephone__number",href:"tel:+544 3490 00000",children:"+544 3490 00000"}),Object(z.jsx)("span",{className:"telephone__description",children:"\u0417\u0432\u043e\u043d\u0438 \u0441\u043a\u043e\u0440\u0435\u0435!"})]})]}),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(z.Fragment,{children:i?Object(z.jsxs)("h1",{className:"header__text header__text--loading",children:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",Object(z.jsx)("span",{className:"header__text_dot"}),Object(z.jsx)("span",{className:"header__text_dot"}),Object(z.jsx)("span",{className:"header__text_dot"})]}):Object(z.jsx)(z.Fragment,{children:a?Object(z.jsxs)("h1",{className:"header__text",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",o?"0":d.length," \u043a\u043e\u0442\u043e\u0432"]}):Object(z.jsxs)("h1",{className:"header__text",children:[o?"\u0412\u044b\u0431\u0440\u0430\u043d\u043e":_," ",o?"0":l.length," ",o?"\u043a\u043e\u0442\u043e\u0432":b]})})})})]})})}),X=(c(32),function(){var e=Object(V.c)((function(e){return e.headerReducer})),t=e.isHomePage,c=e.emailValue,s=Object(V.b)();return Object(z.jsx)("footer",{className:t?"footer":"footer--minimized",children:Object(z.jsx)("div",{className:"container",children:Object(z.jsxs)("div",{className:"footer__wrapper",children:[Object(z.jsxs)("div",{className:"footer__description",children:[Object(z.jsx)("h2",{className:"footer__title",children:"\u0423\u0441\u043f\u0435\u0439 \u043a\u0443\u043f\u0438\u0442\u044c!"}),Object(z.jsx)("p",{className:"footer__subtitle",children:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u0438 \u0443\u0441\u043f\u0435\u0439 \u0441\u043b\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u0430\u043a\u0446\u0438\u0438"})]}),Object(z.jsxs)("form",{className:"form",children:[Object(z.jsxs)("div",{className:"form__controls",children:[Object(z.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",required:!0,value:c,onChange:function(e){var t;s((t=e.target.value,{type:F,payload:t}))}}),Object(z.jsx)("button",{className:"form__button button",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]}),Object(z.jsxs)("label",{className:"form__cheakbox-text",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",Object(z.jsx)("input",{className:"form__cheakbox-input",type:"checkbox",required:!0})]})]})]})})})}),$=c(17),ee=c.n($),te=c(20),ce=c.p+"static/media/no_photo.bb351cb8.png",se=function(){var e=Math.floor(10*Math.random());return function(){var t=Object(te.a)(ee.a.mark((function t(c){var s,n,a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=".concat(e));case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,setTimeout((function(){c(N(!1))}),900),a=[],n.forEach((function(e){void 0===e.image&&(e.image={url:ce});0===Object.keys(e.image).length&&e.image.constructor===Object&&(e.image={url:ce});a.push({id:"".concat(Math.random()+e.id),image:e.image.url,name:e.name,location:e.origin,paw:"4",age:"".concat(Math.floor(12*Math.random())+1," \u043c\u0435\u0441."),price:"".concat(Math.floor(1e4*Math.random())+1500," \u0440\u0443\u0431."),discount:"-".concat(Math.floor(60*Math.random())+10,"%"),discountStatus:Boolean(Math.round(Math.random())),cardStatus:Boolean(Math.round(Math.random())),isFavourite:!1})})),c({type:p,payload:a}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),c((r="There are some problems with response: ".concat(t.t0.message,"."),{type:g,payload:{value:r}})),setTimeout((function(){c(N(!1)),c(v(!0))}),600);case 18:case"end":return t.stop()}var r}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},ne=function(){var e=Object(V.b)();return Object(s.useEffect)((function(){e(se())}),[]),Object(z.jsxs)("div",{className:"page",children:[Object(z.jsx)(Q,{}),Object(z.jsx)("main",{children:Object(z.jsx)(W.a,{})}),Object(z.jsx)(X,{})]})},ae=(c(34),function(e){var t=e.id,c=e.image,s=e.name,n=e.location,a=e.age,r=e.paw,i=e.price,o=e.discount,d=e.isFavourite,l=e.cardStatus,j=e.discountStatus,u=Object(V.b)();return Object(z.jsxs)("div",{className:"card",children:[Object(z.jsxs)("div",{className:"card__preview",children:[Object(z.jsxs)("div",{className:"card__icons",children:[Object(z.jsx)("span",{className:j?"card__icons_discount":"card__icons_discount-none",children:o}),Object(z.jsx)("button",{className:d?"card__icons_button-active":"card__icons_button",onClick:function(){u(E(t,!d))},children:Object(z.jsx)("span",{className:"icon",children:Object(z.jsx)(Y,{id:"heart"})})})]}),Object(z.jsx)("img",{className:"card__image",src:c,alt:"cat"})]}),Object(z.jsxs)("div",{className:"card__information",children:[Object(z.jsx)("p",{className:"card__name",children:s}),Object(z.jsxs)("ul",{className:"card__description description",children:[Object(z.jsxs)("li",{className:"description__item description__item_color",children:["Location: ",Object(z.jsx)("br",{}),Object(z.jsx)("strong",{children:n})]}),Object(z.jsxs)("li",{className:"description__item description__item_age",children:[Object(z.jsx)("span",{className:"bold",children:a})," ",Object(z.jsx)("br",{})," \u0412\u043e\u0437\u0440\u0430\u0441\u0442"]}),Object(z.jsxs)("li",{className:"description__item description__item_paw",children:[Object(z.jsx)("span",{className:"bold",children:r})," ",Object(z.jsx)("br",{})," \u041a\u043e\u043b-\u0432\u043e \u043b\u0430\u043f"]})]}),Object(z.jsx)("p",{className:"card__price",children:i})]}),Object(z.jsx)("button",{className:l?"card__button button":"card__button-sold button",children:l?"\u041a\u0443\u043f\u0438\u0442\u044c":"\u041f\u0440\u043e\u0434\u0430\u043d\u043e"})]})}),re=function(){var e=Object(V.c)((function(e){return e.cardReducer})),t=e.cards,c=e.likedCardsData,n=Object(V.c)((function(e){return e.headerReducer})).isHomePage,a=Object(s.useState)([]),r=Object(Z.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){o(n?t:c)}),[t,c,n]);var d=Object(s.useMemo)((function(){return i.map((function(e){return Object(z.jsx)(ae,{id:e.id,image:e.image,name:e.name,location:e.location,age:e.age,paw:e.paw,price:e.price,discount:e.discount,isFavourite:e.isFavourite,cardStatus:e.cardStatus,discountStatus:e.discountStatus},e.id)}))}),[i]);return Object(z.jsx)(z.Fragment,{children:d})},ie=function(e){var t=e.id,c=e.text,n=e.isFetching,a=e.isFetchError,r=e.toggleSortCardsPriceDecrease,i=e.toggleSortCardsAgeDecrease,o=e.toggleSortCardsPriceIncrease,d=e.toggleSortCardsAgeIncrease,l=Object(s.useState)(!1),j=Object(Z.a)(l,2),u=j[0],b=j[1],O=Object(V.b)();return Object(z.jsxs)("button",{className:"controls__menu",disabled:!!n||!!a,onClick:function(){b(!u),"price"===t&&O(r(t,u)),"age"===t&&O(i(t,u)),"price"===t&&!1===u&&O(o(t,u)),"age"===t&&!1===u&&O(d(t,u))},children:[Object(z.jsx)("span",{className:"controls__menu_text",children:c}),Object(z.jsx)("span",{className:u?"icon sorted":"icon",children:Object(z.jsx)(Y,{id:"arrow-sort"})})]})},oe=(c(35),function(){var e=Object(V.c)((function(e){return e.cardReducer})),t=e.isFetching,c=e.isFetchError,n=e.sortButtons,a=Object(s.useMemo)((function(){return n.map((function(e){return Object(z.jsx)(ie,{id:e.id,text:e.text,isSorted:e.isSorted,toggleSortCardsPriceDecrease:C,toggleSortCardsPriceIncrease:w,toggleSortCardsAgeDecrease:S,toggleSortCardsAgeIncrease:y,isFetching:t,isFetchError:c},e.id)}))}),[t,c]);return Object(z.jsx)("div",{className:"controls__wrapper",children:a})}),de=(c(36),function(){return Object(z.jsx)("div",{className:"preloader",children:Object(z.jsxs)("div",{className:"lds-roller",children:[Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{})]})})}),le=function(){var e=Object(V.c)((function(e){return e.cardReducer})),t=e.isFetching,c=e.isFetchError,n=e.fetchErrorMessage,a=Object(V.b)(),r=Object(s.useRef)(null);return Object(z.jsx)("div",{ref:r,children:Object(z.jsxs)("div",{className:"container",children:[Object(z.jsxs)("div",{className:"controls",children:[Object(z.jsx)("span",{className:"controls__title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(oe,{})})]}),Object(z.jsxs)("div",{className:"gallery",children:[Object(z.jsx)(z.Fragment,{children:t?Object(z.jsx)(de,{}):c?Object(z.jsx)("div",{className:"error",children:n}):Object(z.jsx)("div",{className:"gallery__wrapper",children:Object(z.jsx)(re,{})})}),Object(z.jsx)("button",{className:"gallery__button button",disabled:!!t||!!c,onClick:function(){a(se())},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"}),Object(z.jsx)("button",{className:"pagination",disabled:!!t||!!c,onClick:function(){r.current.scrollIntoView({block:"start",behavior:"smooth"})},children:Object(z.jsx)("span",{className:"icon",children:Object(z.jsx)(Y,{id:"arrow"})})})]})]})})},je=c.p+"static/media/empty.cd1884f0.png",ue=(c(37),function(){var e=Object(V.c)((function(e){return e.cardReducer})).likedCardsData,t=Object(s.useState)(!0),c=Object(Z.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){0===e.length?a(!0):a(!1)}),[e]),Object(z.jsx)("div",{className:"section",children:Object(z.jsx)("div",{className:"basket",children:Object(z.jsx)("div",{className:"basket__wrapper",children:Object(z.jsx)("div",{className:"basket__slider",children:n?Object(z.jsxs)("div",{className:"empty",children:[Object(z.jsx)("img",{className:"empty__preview",src:je,alt:"empty"}),Object(z.jsx)("h4",{className:"empty__text",children:"No matches"})]}):Object(z.jsx)(re,{})})})})})}),be=c.p+"static/media/in_process.448aa860.png",Oe=function(){var e=Object(W.g)(),t=Object(V.b)();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"section",children:[Object(z.jsx)("img",{className:"section__image",src:be,alt:"cat"}),Object(z.jsx)("h1",{className:"section__title",children:"NEWS PAGE IN PROCESS"}),Object(z.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(z.jsx)("span",{children:Object(z.jsx)(U.b,{to:"/Cats-Store",onClick:function(){t(B(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},he=function(){var e=Object(W.g)(),t=Object(V.b)();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"section",children:[Object(z.jsx)("img",{className:"section__image",src:be,alt:"cat"}),Object(z.jsx)("h1",{className:"section__title",children:"PROFILE PAGE IN PROCESS"}),Object(z.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(z.jsx)("span",{children:Object(z.jsx)(U.b,{to:"/Cats-Store",onClick:function(){t(B(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},me=c.p+"static/media/no_found.bee11de8.png",_e=function(){var e=Object(W.g)(),t=Object(V.b)();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"section",children:[Object(z.jsx)("img",{className:"section__image",src:me,alt:"404 error"}),Object(z.jsx)("h1",{className:"section__title section__title-error",children:"404"}),Object(z.jsxs)("p",{className:"section__link",children:["Sorry, this page doesn't exist, return to home"," ",Object(z.jsx)("span",{children:Object(z.jsx)(U.b,{to:"/Cats-Store",onClick:function(){t(B(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},pe=(c(38),c(39),c(40),function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(W.d,{children:Object(z.jsxs)(W.b,{path:"/Cats-Store",element:Object(z.jsx)(ne,{}),children:[Object(z.jsx)(W.b,{index:!0,element:Object(z.jsx)(le,{})}),Object(z.jsx)(W.b,{path:"Favourite",element:Object(z.jsx)(ue,{})}),Object(z.jsx)(W.b,{path:"News",element:Object(z.jsx)(Oe,{})}),Object(z.jsx)(W.b,{path:"Profile",element:Object(z.jsx)(he,{})}),Object(z.jsx)(W.b,{path:"*",element:Object(z.jsx)(_e,{})})]})})})});r.a.render(Object(z.jsx)(n.a.StrictMode,{children:Object(z.jsx)(U.a,{children:Object(z.jsx)(V.a,{store:G,children:Object(z.jsx)(pe,{})})})}),document.getElementById("root")),i()}},[[41,1,2]]]);
//# sourceMappingURL=main.053040b8.chunk.js.map