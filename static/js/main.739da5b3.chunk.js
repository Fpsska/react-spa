(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(14),i=c.n(a),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},o=c(16),l=c(29),d=c(10),j=c(3),u="ACTION_TOGGLE_FAVOURITE",b="ACTION_SORT_CARDS",h="ACTION_FETCH_CARDS",O="ACTION_FETCH_TOGGLE",m="ACTION_GET_CATS_COUNT",x="ACTION_CHANGE_NAV_DISPLAY",p="ACTION_CHANGE_SCROLL_STATUS",_=function(e){return{type:x,payload:e}},g=function(e){return{type:O,payload:e}},f=function(e){return{type:h,payload:e}},v={cards:[],headerLinks:[{id:1,text:"Main",link:"/"},{id:2,text:"Gallery",link:"/gallery"},{id:3,text:"News",link:"/news"},{id:4,text:"Profile",link:"/profile"}],sortButtons:[{text:"\u0426\u0435\u043d\u0430",id:"price",isSorted:!1},{text:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",id:"age",isSorted:!1}],catsCount:"",isFetching:!1,isBurgerHidden:!0,isBodyScrolling:!0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{isFavourite:t.payload.status}):e}))});case b:if("price"===t.payload.id&&!1===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{cards:Object(d.a)(e.cards.sort((function(e,t){return parseInt(t.price)-parseInt(e.price)}))),sortButtons:e.sortButtons.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{isSorted:t.payload.status})}))});if("price"===t.payload.id&&!0===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{cards:Object(d.a)(e.cards.sort((function(e,t){return parseInt(e.price)-parseInt(t.price)})))});if("age"===t.payload.id&&!1===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{cards:Object(d.a)(e.cards.sort((function(e,t){return parseInt(t.age)-parseInt(e.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{isSorted:t.payload.status})}))});if("age"===t.payload.id&&!0===t.payload.status)return Object(j.a)(Object(j.a)({},e),{},{cards:Object(d.a)(e.cards.sort((function(e,t){return parseInt(e.age)-parseInt(t.age)})))});break;case h:return Object(j.a)(Object(j.a)({},e),{},{cards:Object(d.a)(e.cards.concat(t.payload)),catsCount:""});case O:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{catsCount:e.catsCount=t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{isBurgerHidden:t.payload});case p:return Object(j.a)(Object(j.a)({},e),{},{isBodyScrolling:t.payload});default:return e}},C=Object(o.b)({mainPage:N}),w=Object(o.c)(C,Object(o.a)(l.a)),S=c(15),y=c(8),L=c(2),k=c(5),B=c(0),I=function(e){switch(e.id){case"heart":return Object(B.jsx)("svg",{className:"icon__heart",width:"46",height:"42",viewBox:"0 0 46 42",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{d:"M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z",fill:"white"})});case"arrow":return Object(B.jsxs)("svg",{className:"icon__arrow",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(B.jsx)("g",{clipPath:"url(#clip0)",children:Object(B.jsx)("path",{d:"M8.29764 3.99939L0.287559 12.0096C0.102145 12.1949 -8.06437e-08 12.4422 -6.91167e-08 12.7059C-5.75898e-08 12.9696 0.102145 13.2169 0.287559 13.4022L0.87731 13.9921C1.2616 14.3759 1.88618 14.3759 2.26988 13.9921L8.99627 7.2657L15.7301 13.9996C15.9155 14.1848 16.1627 14.2871 16.4263 14.2871C16.6901 14.2871 16.9373 14.1848 17.1228 13.9995L17.7124 13.4097C17.8979 13.2242 18 12.9771 18 12.7134C18 12.4497 17.8979 12.2023 17.7124 12.0171L9.69504 3.99939C9.50904 3.81368 9.26071 3.71168 8.99671 3.71227C8.73169 3.71168 8.48349 3.81368 8.29764 3.99939Z",fill:"white"})}),Object(B.jsx)("defs",{children:Object(B.jsx)("clipPath",{id:"clip0",children:Object(B.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0 18) rotate(-90)"})})})]});case"logo":return Object(B.jsxs)("svg",{className:"icon__logo",width:"78",height:"52",viewBox:"0 0 78 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(B.jsx)("path",{d:"M63.0559 15.8815L54.2119 15.8947L27.8012 40.7922H10.0354V23.4593L34.2348 0.848633L17.993 0.899213L0 17.6625V51.1511H34.0283L63.0418 23.5687L63.0559 15.8815Z",fill:"white"}),Object(B.jsx)("path",{d:"M43.9721 0.848633L14.9586 28.4318L14.9453 36.1182L23.7884 36.1049L50.1991 11.2075H67.9649V28.5404L43.7656 51.1511L60.0074 51.1013L78.0004 34.338V0.848633H43.9721Z",fill:"white"})]});case"arrow-sort":return Object(B.jsxs)("svg",{className:"icon__arrow-sort",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(B.jsx)("g",{clipPath:"url(#clip0_5:133)",children:Object(B.jsx)("path",{d:"M8.0853 11.6669L14.7604 4.99166C14.9149 4.83727 15 4.63118 15 4.41142C15 4.19167 14.9149 3.98557 14.7604 3.83118L14.2689 3.3396C13.9487 3.01973 13.4282 3.01973 13.1084 3.3396L7.50311 8.94492L1.89157 3.33338C1.73706 3.17899 1.53109 3.09375 1.31146 3.09375C1.09158 3.09375 0.885606 3.17899 0.730973 3.33338L0.239635 3.82496C0.0851249 3.97947 3.76698e-06 4.18545 3.75737e-06 4.4052C3.74777e-06 4.62496 0.0851249 4.83105 0.239635 4.98544L6.9208 11.6669C7.0758 11.8216 7.28275 11.9066 7.50275 11.9061C7.7236 11.9066 7.93042 11.8216 8.0853 11.6669Z",fill:"black"})}),Object(B.jsx)("defs",{children:Object(B.jsx)("clipPath",{id:"clip0_5:133",children:Object(B.jsx)("rect",{width:"15",height:"15",fill:"white",transform:"translate(15) rotate(90)"})})})]});default:return Object(B.jsx)("svg",{className:"empty"})}},F=function(e){return Object(B.jsx)("li",{className:e.isBurgerHidden?"nav__menu_item":"nav__menu_item-burger",children:Object(B.jsx)(y.b,{to:e.link,className:e.isBurgerHidden?"nav__menu_link":"nav__menu_link-burger",children:e.text})})},H=function(e){var t=e.headerLinks.map((function(t){return Object(B.jsx)(F,{text:t.text,link:t.link,isBurgerHidden:e.isBurgerHidden},t.id)}));return Object(B.jsx)("nav",{className:"nav",children:Object(B.jsx)("ul",{className:e.isBurgerHidden?"nav__menu":"nav__menu-burger",children:t})})},E=(c(41),function(e){var t=Object(n.useState)(!1),c=Object(k.a)(t,2),s=c[0],a=c[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"menu",onClick:function(){a(!s),e.changeScrollStatus(s);var t=window.innerWidth-document.body.clientWidth;document.body.style.paddingRight="".concat(t,"px")},children:[Object(B.jsx)("div",{className:s?"menu__line menu__line-top opened":"menu__line menu__line-top"}),Object(B.jsx)("div",{className:s?"menu__line menu__line-middle opened":"menu__line menu__line-middle"}),Object(B.jsx)("div",{className:s?"menu__line menu__line-bottom opened":"menu__line menu__line-bottom"})]}),Object(B.jsx)("div",{className:s?"burger active":"burger",children:Object(B.jsx)("div",{className:"burger__nav",children:Object(B.jsx)(H,{headerLinks:e.headerLinks,changeScrollStatus:e.changeScrollStatus})})})]})}),P=(c(42),function(e){var t=Object(n.useState)(e.catsCount),c=Object(k.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){a(e.catsCount)}),[e.catsCount]),Object(n.useEffect)((function(){e.burgerHandler()}),[]),Object(B.jsx)("header",{className:"header",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"header__section",children:[Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)(I,{id:"logo"})}),Object(B.jsx)(B.Fragment,{children:e.isBurgerHidden?Object(B.jsx)(H,{headerLinks:e.headerLinks,isBurgerHidden:e.isBurgerHidden}):Object(B.jsx)(E,{headerLinks:e.headerLinks,isBodyScrolling:e.isBodyScrolling,changeScrollStatus:e.changeScrollStatus})}),Object(B.jsxs)("div",{className:"header__telephone telephone",children:[Object(B.jsx)("a",{className:"telephone__number",href:"tel:+544 3490 00000",children:"+544 3490 00000"}),Object(B.jsx)("span",{className:"telephone__description",children:"\u0417\u0432\u043e\u043d\u0438 \u0441\u043a\u043e\u0440\u0435\u0435!"})]})]}),Object(B.jsxs)("h1",{className:"header__text",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",s," \u043a\u043e\u0442\u043e\u0432"]})]})})}),T=(c(43),function(e){return Object(B.jsxs)("div",{className:"card",children:[Object(B.jsxs)("div",{className:"card__preview",children:[Object(B.jsxs)("div",{className:"card__icons",children:[Object(B.jsx)("span",{className:e.discountStatus?"card__icons_discount":"card__icons_discount-none",children:e.discount}),Object(B.jsx)("button",{className:e.isFavourite?"card__icons_button-active":"card__icons_button",onClick:function(){e.isFavourite?e.toggleIsFavourite(e.id,!1):e.toggleIsFavourite(e.id,!0)},children:Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)(I,{id:"heart"})})})]}),Object(B.jsx)("img",{className:"card__image",src:e.image,alt:"cat"})]}),Object(B.jsxs)("div",{className:"card__information",children:[Object(B.jsx)("p",{className:"card__name",children:e.name}),Object(B.jsxs)("ul",{className:"card__description description",children:[Object(B.jsxs)("li",{className:"description__item description__item_color",children:["Location: ",Object(B.jsx)("br",{}),Object(B.jsx)("strong",{children:e.location})]}),Object(B.jsxs)("li",{className:"description__item description__item_age",children:[Object(B.jsx)("span",{className:"bold",children:e.age})," ",Object(B.jsx)("br",{})," \u0412\u043e\u0437\u0440\u0430\u0441\u0442"]}),Object(B.jsxs)("li",{className:"description__item description__item_paw",children:[Object(B.jsx)("span",{className:"bold",children:e.paw})," ",Object(B.jsx)("br",{})," \u041a\u043e\u043b-\u0432\u043e \u043b\u0430\u043f"]})]}),Object(B.jsx)("p",{className:"card__price",children:e.price})]}),Object(B.jsx)("button",{className:e.cardStatus?"card__button button":"card__button-sold button",children:e.cardStatus?"\u041a\u0443\u043f\u0438\u0442\u044c":"\u041f\u0440\u043e\u0434\u0430\u043d\u043e"})]})}),A=function(e){var t=Object(n.useState)(e.cards),c=Object(k.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){a(e.cards)}),[e.cards]);var i=s.map((function(t){return Object(B.jsx)(T,{id:t.id,image:t.image,name:t.name,location:t.location,age:t.age,paw:t.paw,price:t.price,discount:t.discount,isFavourite:t.isFavourite,cardStatus:t.cardStatus,discountStatus:t.discountStatus,isLoadingImage:t.isLoadingImage,toggleIsFavourite:e.toggleIsFavourite},t.id)}));return Object(B.jsx)("div",{className:"gallery__wrapper",children:i})},M=(c(44),function(){return Object(B.jsx)("footer",{className:"footer",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"footer__wrapper",children:[Object(B.jsxs)("div",{className:"footer__description",children:[Object(B.jsx)("h2",{className:"footer__title",children:"\u0423\u0441\u043f\u0435\u0439 \u043a\u0443\u043f\u0438\u0442\u044c!"}),Object(B.jsx)("p",{className:"footer__subtitle",children:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u0438 \u0443\u0441\u043f\u0435\u0439 \u0441\u043b\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u0430\u043a\u0446\u0438\u0438"})]}),Object(B.jsxs)("form",{className:"form",children:[Object(B.jsxs)("div",{className:"form__controls",children:[Object(B.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",required:!0}),Object(B.jsx)("button",{className:"form__button button",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]}),Object(B.jsxs)("label",{className:"form__cheakbox-text",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",Object(B.jsx)("input",{className:"form__cheakbox-input",type:"checkbox",required:!0})]})]})]})})})}),G=function(e){var t=Object(n.useState)(!1),c=Object(k.a)(t,2),s=c[0],a=c[1];return Object(B.jsxs)("button",{onClick:function(){a(!s),e.toggleSortCards(e.id,s)},className:"controls__menu",children:[Object(B.jsx)("span",{className:"controls__menu_text",children:e.text}),Object(B.jsx)("span",{className:s?"icon sorted":"icon",children:Object(B.jsx)(I,{id:"arrow-sort"})})]})},R=(c(45),function(e){var t=e.sortButtons.map((function(t){return Object(B.jsx)(G,{id:t.id,text:t.text,name:t.name,isSorted:t.isSorted,toggleSortCards:e.toggleSortCards},t.id)}));return Object(B.jsx)("div",{className:"controls__wrapper",children:t})}),V=(c(46),function(){return Object(B.jsx)("div",{className:"preloader",children:Object(B.jsxs)("div",{className:"lds-roller",children:[Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{})]})})}),q=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){e.requestHandler()}),[]),Object(B.jsxs)("div",{ref:t,className:"page",children:[Object(B.jsx)(P,{catsCount:e.catsCount,headerLinks:e.headerLinks,isBurgerHidden:e.isBurgerHidden,burgerHandler:e.burgerHandler,changeScrollStatus:e.changeScrollStatus}),Object(B.jsx)("main",{children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"controls",children:[Object(B.jsx)("span",{className:"controls__title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(B.jsx)(R,{sortButtons:e.sortButtons,toggleSortCards:e.toggleSortCards})]}),Object(B.jsxs)("div",{className:"gallery",children:[e.isFetching?Object(B.jsx)(A,{cards:e.cards,toggleIsFavourite:e.toggleIsFavourite}):Object(B.jsx)(V,{}),Object(B.jsx)("button",{className:"gallery__button button",onClick:function(){e.requestHandler()},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"}),Object(B.jsx)("button",{className:"pagination",onClick:function(){t.current.scrollIntoView({top:0,behavior:"smooth"})},children:Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)(I,{id:"arrow"})})})]})]})}),Object(B.jsx)(M,{})]})},W=c.p+"static/media/in_process.448aa860.png",Z=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("main",{children:Object(B.jsxs)("div",{className:"section",children:[Object(B.jsx)("img",{className:"section__image",src:W,alt:"cat"}),Object(B.jsx)("h1",{className:"section__title",children:"GALLERY PAGE IN PROCESS"}),Object(B.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(B.jsx)("span",{children:Object(B.jsx)(y.b,{to:"/",children:"page"})})]})]})})})},D=c(20),U=c.n(D),J=c(30),Y=c(31),z=c.n(Y),K=function(){var e=Math.floor(10*Math.random());return z.a.get("https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=".concat(e))},Q=c.p+"static/media/no_photo.bb351cb8.png",X=function(){return function(e){K().then(function(){var t=Object(J.a)(U.a.mark((function t(c){var n,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return setTimeout((function(){e(g(!0))}),1500),t.next=3,c.data;case 3:return n=t.sent,s=[],t.next=7,n.forEach((function(e){void 0===e.image&&(e.image={url:Q});0===Object.keys(e.image).length&&e.image.constructor===Object&&(e.image={url:Q});s.push({id:"".concat(Math.random()+e.id),image:e.image.url,name:e.name,location:e.origin,paw:"4",age:"".concat(Math.floor(12*Math.random())+1," \u043c\u0435\u0441."),price:"".concat(Math.floor(1e4*Math.random())+1500," \u0440\u0443\u0431."),discount:"-".concat(Math.floor(60*Math.random())+10,"%"),discountStatus:Boolean(Math.round(Math.random())),cardStatus:Boolean(Math.round(Math.random())),isFavourite:!1,isLoadingImage:!0})}));case 7:return t.next=9,e(f(s));case 9:return t.next=11,e((a=c.headers["pagination-count"],{type:m,payload:a}));case 11:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.error(e)}))}},$=function(){return function(e){var t=function(){window.innerWidth<800?e(_(!1)):window.innerWidth>800&&e(_(!0))};window.addEventListener("resize",(function(){return t()})),window.addEventListener("load",(function(){return t()}))}},ee=Object(S.b)((function(e){return{headerLinks:e.mainPage.headerLinks,cards:e.mainPage.cards,sortButtons:e.mainPage.sortButtons,catsCount:e.mainPage.catsCount,isFetching:e.mainPage.isFetching,isBurgerHidden:e.mainPage.isBurgerHidden,isBodyScrolling:e.mainPage.isBodyScrolling}}),(function(e){return{toggleSortCards:function(t,c){return e(function(e,t){return{type:b,payload:{id:e,status:t}}}(t,c))},toggleIsFavourite:function(t,c){return e(function(e,t){return{type:u,payload:{id:e,status:t}}}(t,c))},fetchToggle:function(t){return e(g(t))},requestHandler:function(){return e(X())},burgerHandler:function(){return e($())},changeScrollStatus:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))(q),te=function(){return Object(B.jsx)("div",{className:"page",children:Object(B.jsx)("main",{children:Object(B.jsxs)("div",{className:"section",children:[Object(B.jsx)("img",{className:"section__image",src:W,alt:"cat"}),Object(B.jsx)("h1",{className:"section__title",children:"NEWS PAGE IN PROCESS"}),Object(B.jsxs)("p",{className:"section__link",children:["return to home ",Object(B.jsx)("span",{children:Object(B.jsx)(y.b,{to:"/",children:"page"})})]})]})})})},ce=function(){return Object(B.jsx)("div",{className:"page",children:Object(B.jsx)("main",{children:Object(B.jsxs)("div",{className:"section",children:[Object(B.jsx)("img",{className:"section__image",src:W,alt:"cat"}),Object(B.jsx)("h1",{className:"section__title",children:"PROFILE PAGE IN PROCESS"}),Object(B.jsxs)("p",{className:"section__link",children:["return to home ",Object(B.jsx)("span",{children:Object(B.jsx)(y.b,{to:"/",children:"page"})})]})]})})})},ne=c.p+"static/media/no_found.bee11de8.png",se=function(){return Object(B.jsx)("div",{className:"page",children:Object(B.jsx)("main",{children:Object(B.jsxs)("div",{className:"section",children:[Object(B.jsx)("img",{className:"section__image",src:ne,alt:"404 error"}),Object(B.jsx)("h1",{className:"section__title section__title-error",children:"404"}),Object(B.jsxs)("p",{className:"section__link",children:["Sorry, this page doesn't exist, return to home ",Object(B.jsx)("span",{children:Object(B.jsx)(y.b,{to:"/",children:"page"})})]})]})})})};c(66),c(67),c(68);var ae=function(){return Object(B.jsx)(y.a,{children:Object(B.jsxs)(L.c,{children:[Object(B.jsx)(L.a,{index:!0,element:Object(B.jsx)(ee,{})}),Object(B.jsx)(L.a,{path:"/",element:Object(B.jsx)(q,{})}),Object(B.jsx)(L.a,{path:"/gallery",element:Object(B.jsx)(Z,{})}),Object(B.jsx)(L.a,{path:"/news",element:Object(B.jsx)(te,{})}),Object(B.jsx)(L.a,{path:"/profile",element:Object(B.jsx)(ce,{})}),Object(B.jsx)(L.a,{path:"*",element:Object(B.jsx)(se,{})})]})})};i.a.render(Object(B.jsx)(S.a,{store:w,children:Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(ae,{})})}),document.getElementById("root")),r()}},[[69,1,2]]]);
//# sourceMappingURL=main.739da5b3.chunk.js.map