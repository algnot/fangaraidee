(this["webpackJsonpfang-arai-dee"]=this["webpackJsonpfang-arai-dee"]||[]).push([[0],{17:function(e,a,n){e.exports={container:"Navbar_container__2Psk1",containerLink:"Navbar_containerLink__RhSVW",navLink:"Navbar_navLink__LBvEt",navLinkIcon:"Navbar_navLinkIcon__3fuA-",navLinkText:"Navbar_navLinkText__31WQD",Logo:"Navbar_Logo__3IpWz",switch:"Navbar_switch__3o0Lu",userLoginMobile:"Navbar_userLoginMobile__3Xh3K",navLinkHide:"Navbar_navLinkHide__2CpA9"}},19:function(e,a,n){e.exports={container:"UserMenu_container__2KYlT",loginContainer:"UserMenu_loginContainer__D1dM2",loginHeader:"UserMenu_loginHeader__3KwNB",loginIcon:"UserMenu_loginIcon__UKQ9v",loginTextHeader:"UserMenu_loginTextHeader__1f2Ow",loginContent:"UserMenu_loginContent__2-u-t",loginContentText:"UserMenu_loginContentText__1kFdw",btnLogin:"UserMenu_btnLogin__2fbka",btnLoginText:"UserMenu_btnLoginText__1yCtY"}},28:function(e,a,n){e.exports={container:"ChatBar_container__y-gpV",header:"ChatBar_header__uhMyE",headerInfo:"ChatBar_headerInfo__3HM4z",chatContent:"ChatBar_chatContent__q8FPD",chatName:"ChatBar_chatName__22pX5",chat:"ChatBar_chat__2g3V-",message:"ChatBar_message__3DTwC",input:"ChatBar_input__1NXfW",btn:"ChatBar_btn__1xrDV",chatIcon:"ChatBar_chatIcon__2GOKF",containerMobileShow:"ChatBar_containerMobileShow__MtB3I",headerBack:"ChatBar_headerBack__3xFxc",containerMobileHide:"ChatBar_containerMobileHide__3tgDj",fade:"ChatBar_fade__27_pD"}},32:function(e,a,n){e.exports={container:"Login_container__K7Saf",loginContainer:"Login_loginContainer__1zCwr",loginHeader:"Login_loginHeader__3xYQI",loginIcon:"Login_loginIcon__UqlE1",loginTextHeader:"Login_loginTextHeader__2Cp-u",loginContent:"Login_loginContent__1qOuO",loginContentText:"Login_loginContentText__1dTob",btnLogin:"Login_btnLogin__26QYy",btnLoginText:"Login_btnLoginText__2nlnZ"}},38:function(e,a,n){e.exports={searchRoom:"SearchBar_searchRoom__3KFLb",searchIcon:"SearchBar_searchIcon__xOIng",mainMenu:"SearchBar_mainMenu__foYrQ",searchBar:"SearchBar_searchBar__ILYtr",createRoomBtn:"SearchBar_createRoomBtn__3GRjY",joinRoom:"SearchBar_joinRoom__VhvyS",mobileHide:"SearchBar_mobileHide__2IdJt"}},43:function(e,a){var n=function(e){localStorage.setItem("theme",e),document.documentElement.className=e},t=function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?n("theme-dark"):"theme-light"===localStorage.getItem("theme")&&n("theme-light"):n("theme-dark")};e.exports={setTheme:n,keepTheme:t,changeMode:function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?n("theme-light"):"theme-light"===localStorage.getItem("theme")&&n("theme-dark"):n("theme-dark"),t()},getTheme:function(){return localStorage.getItem("theme")?localStorage.getItem("theme"):(n("theme-dark"),"theme-dark")}}},51:function(e,a,n){e.exports={container:"Home_container__Yf_7E"}},54:function(e,a,n){e.exports={container:"Loading_container__xtF8j",textLoading:"Loading_textLoading__2cNqd",loading:"Loading_loading__12z9-"}},56:function(e,a,n){e.exports={container:"App_container__3uZHQ"}},60:function(e,a){e.exports={firebaseConfig:{apiKey:"AIzaSyBox7PZHJp51f92mUmrDikdlXW0Icrg6CM",authDomain:"fungaraidee.firebaseapp.com",projectId:"fungaraidee",storageBucket:"fungaraidee.appspot.com",messagingSenderId:"1081398082378",appId:"1:1081398082378:web:560969975f7108bb51dfb3",measurementId:"G-05CFD0FCE3"}}},67:function(e,a,n){},74:function(e,a,n){},79:function(e,a,n){"use strict";n.r(a);var t=n(12),c=n.n(t),i=n(59),s=n.n(i),o=(n(67),n(0)),r=n.n(o),l=n(1),d=n(13),j=n(54),h=n.n(j),b=n(6);function g(){var e=Object(t.useState)(0),a=Object(d.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)((function(){setInterval((function(){c((function(e){return e+1}))}),500)}),[]),Object(b.jsx)("div",{className:h.a.container,children:Object(b.jsxs)("div",{className:h.a.textLoading,children:["\u0e1f\u0e31\u0e07\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35 "," ",n%3>0&&".",n%3>1&&"."]})})}var u=n(43),m=n(17),x=n.n(m),O=n(20),_=n(21);n(74);var v=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)((function(){"theme-dark"==Object(u.getTheme)()?c(!1):c(!0)}),[]),Object(b.jsx)("div",{style:{width:100},children:Object(b.jsxs)("div",{className:"container-switch",children:[Object(b.jsx)("input",{type:"checkbox",id:"toggle",className:"toggle--checkbox",checked:n,onChange:function(){c(!n),Object(u.changeMode)()}}),Object(b.jsx)("label",{for:"toggle",className:"toggle--label",children:Object(b.jsx)("span",{className:"toggle--label-background"})})]})})},f=n(41),N=n(32),p=n.n(N),L=n(60),k=n(50),C=(n(80),n(75),k.a.initializeApp(L.firebaseConfig)),I=C.firestore(),T=C.auth(),S=new k.a.auth.GoogleAuthProvider,B=new k.a.auth.FacebookAuthProvider;function M(e){var a=e.display,n=function(){var e=Object(l.a)(r.a.mark((function e(){var n,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.signInWithPopup(S).then((function(e){a()}));case 2:(n=e.sent)&&(t=I.collection("users").doc(n.user.uid)).get().then((function(e){e.data()||t.set({uid:n.user.uid,displayName:n.user.displayName,photoURL:n.user.photoURL,email:n.user.email,created:(new Date).valueOf(),role:"user",provider:"google"})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.signInWithPopup(B);case 2:(a=e.sent)&&(n=I.collection("users").doc(a.user.uid)).get().then((function(e){e.data()||n.set({uid:a.user.uid,displayName:a.user.displayName,photoURL:a.user.photoURL,email:a.user.email,created:(new Date).valueOf(),role:"user",provider:"facebook"})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:p.a.container,children:Object(b.jsxs)("div",{className:p.a.loginContainer,children:[Object(b.jsxs)("div",{className:p.a.loginHeader,children:[Object(b.jsx)("div",{className:p.a.loginIcon,onClick:a,children:Object(b.jsx)(O.a,{icon:_.j})}),Object(b.jsx)("div",{className:p.a.loginTextHeader,children:"fungAraiDee"})]}),Object(b.jsxs)("div",{className:p.a.loginContent,children:[Object(b.jsx)("div",{className:p.a.loginContentText,children:"\u0e40\u0e25\u0e37\u0e2d\u0e01 Service \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"}),Object(b.jsxs)("div",{className:p.a.btnLogin,onClick:n,children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/google-logo.png"}),Object(b.jsx)("div",{className:p.a.btnLoginText,children:"Login \u0e14\u0e49\u0e27\u0e22 google"})]}),Object(b.jsxs)("div",{className:p.a.btnLogin,onClick:t,style:{marginTop:15},children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/facebook-new.png"}),Object(b.jsx)("div",{className:p.a.btnLoginText,children:"Login \u0e14\u0e49\u0e27\u0e22 facebook"})]})]})]})})}var y=n(19),w=n.n(y);function H(e){var a=e.display,n=e.user,c=Object(t.useState)(!1),i=Object(d.a)(c,2),s=i[0],o=i[1],r=Object(t.useState)(!1),l=Object(d.a)(r,2),j=l[0],h=l[1];return Object(b.jsxs)(b.Fragment,{children:[j&&Object(b.jsx)(g,{}),s?Object(b.jsx)("div",{className:w.a.container,children:Object(b.jsxs)("div",{className:w.a.loginContainer,children:[Object(b.jsxs)("div",{className:w.a.loginHeader,children:[Object(b.jsx)("div",{className:w.a.loginIcon,onClick:a,children:Object(b.jsx)(O.a,{icon:_.j})}),Object(b.jsx)("div",{className:w.a.loginTextHeader,children:"\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a?"})]}),Object(b.jsxs)("div",{className:w.a.loginContent,children:[Object(b.jsx)("div",{className:w.a.btnLogin,style:{marginTop:15},onClick:function(){h(!0),T.signOut().then((function(){h(!1),a(),window.location.reload()})).catch((function(e){h(!1),alert("can not sign out plese try again!")}))},children:Object(b.jsxs)("div",{className:w.a.btnLoginText,children:["\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a @",n.displayName.split(" ")[0]]})}),Object(b.jsx)("div",{className:w.a.btnLogin,style:{marginTop:15},onClick:a,children:Object(b.jsx)("div",{className:w.a.btnLoginText,children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"})})]})]})}):Object(b.jsx)("div",{className:w.a.container,children:Object(b.jsxs)("div",{className:w.a.loginContainer,children:[Object(b.jsxs)("div",{className:w.a.loginHeader,children:[Object(b.jsx)("div",{className:w.a.loginIcon,onClick:a,children:Object(b.jsx)(O.a,{icon:_.j})}),Object(b.jsx)("div",{className:w.a.loginTextHeader,children:"fungAraiDee"})]}),Object(b.jsxs)("div",{className:w.a.loginContent,children:[Object(b.jsx)("div",{className:w.a.btnLogin,style:{marginTop:15},children:Object(b.jsxs)("div",{className:w.a.btnLoginText,children:["\u0e42\u0e1b\u0e23\u0e44\u0e1f\u0e25\u0e4c @",n.displayName.split(" ")[0]]})}),Object(b.jsx)("div",{className:w.a.btnLogin,style:{marginTop:15},onClick:function(){o(!0)},children:Object(b.jsxs)("div",{className:w.a.btnLoginText,children:["\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a @",n.displayName.split(" ")[0]]})})]})]})})]})}function D(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),n=a[0],c=a[1],i=Object(t.useState)(!1),s=Object(d.a)(i,2),o=s[0],r=s[1],l=Object(t.useState)(""),j=Object(d.a)(l,2),h=j[0],g=j[1],u=Object(t.useState)(null),m=Object(d.a)(u,2),N=m[0],p=m[1],L=function(){c(!n)},k=function(){r(!o)};return Object(t.useEffect)((function(){T.onAuthStateChanged((function(e){e&&I.collection("users").doc(e.uid).get().then((function(e){g(e.data().displayName.split(" ")[0]),p(e.data())}))}))}),[]),Object(b.jsxs)(b.Fragment,{children:[n&&!h&&Object(b.jsx)(M,{display:L}),o&&h&&Object(b.jsx)(H,{user:N,display:k}),Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsx)("div",{className:x.a.Logo,children:"fangAraiDee"}),Object(b.jsxs)("div",{className:x.a.containerLink,children:[Object(b.jsx)(f.b,{to:"/",children:Object(b.jsxs)("div",{className:x.a.navLink,children:[Object(b.jsx)("div",{className:x.a.navLinkIcon,children:Object(b.jsx)(O.a,{icon:_.c})}),Object(b.jsx)("div",{className:x.a.navLinkText,children:"Home"})]})}),Object(b.jsx)(f.b,{to:"/podcast",children:Object(b.jsxs)("div",{className:x.a.navLink,children:[Object(b.jsx)("div",{className:x.a.navLinkIcon,children:Object(b.jsx)(O.a,{icon:_.f})}),Object(b.jsx)("div",{className:x.a.navLinkText,children:"Podcast"})]})}),Object(b.jsx)(f.b,{to:"/random",children:Object(b.jsxs)("div",{className:x.a.navLink,children:[Object(b.jsx)("div",{className:x.a.navLinkIcon,children:Object(b.jsx)(O.a,{icon:_.g})}),Object(b.jsx)("div",{className:x.a.navLinkText,children:"Random"})]})}),h?Object(b.jsxs)("div",{className:x.a.navLinkHide,onClick:k,children:[Object(b.jsx)("div",{className:x.a.navLinkIcon,children:Object(b.jsx)(O.a,{icon:_.k})}),Object(b.jsx)("div",{className:x.a.navLinkText,children:h})]}):Object(b.jsxs)("div",{className:x.a.navLinkHide,onClick:L,children:[Object(b.jsx)("div",{className:x.a.navLinkIcon,children:Object(b.jsx)(O.a,{icon:_.i})}),Object(b.jsx)("div",{className:x.a.navLinkText,children:"Login"})]}),h?Object(b.jsxs)("div",{className:x.a.switch,children:[Object(b.jsx)("div",{className:x.a.userLoginMobile,onClick:k,children:h}),Object(b.jsx)(v,{})]}):Object(b.jsxs)("div",{className:x.a.switch,children:[Object(b.jsxs)("div",{className:x.a.userLoginMobile,onClick:L,children:[Object(b.jsx)(O.a,{icon:_.i}),"Login"]}),Object(b.jsx)(v,{})]})]})]})]})}var U=n(56),E=n.n(U),F=n(18),R=n(51),A=n.n(R),P=n(38),K=n.n(P);function G(){return Object(b.jsx)("div",{className:K.a.joinRoom,children:Object(b.jsxs)("div",{className:K.a.searchBar,children:[Object(b.jsxs)("div",{className:K.a.searchRoom,children:[Object(b.jsx)("input",{placeholder:"Enter room ID to join."}),Object(b.jsx)("div",{className:K.a.searchIcon,children:Object(b.jsx)(O.a,{icon:_.h})})]}),Object(b.jsxs)("div",{className:K.a.createRoomBtn,children:[Object(b.jsx)("div",{className:K.a.mobileHide,children:"Create session"}),Object(b.jsx)(O.a,{icon:_.e})]})]})})}var Y=n(26),W=n(28),z=n.n(W);function Q(e){var a=e.name,n=e.id,c=e.setLoading,i=Object(t.useState)(!1),s=Object(d.a)(i,2),o=s[0],r=s[1],l=Object(t.useState)([]),j=Object(d.a)(l,2),h=j[0],g=j[1],u=Object(t.useState)(""),m=Object(d.a)(u,2),x=m[0],v=m[1],f=Object(t.useState)("guest"+Math.floor(9999*Math.random())),N=Object(d.a)(f,2),p=N[0],L=N[1];Object(t.useEffect)((function(){c(!0);var e=I.collection("session").doc(n).collection("chat"),a=e.orderBy("time","desc").limit(16);a.get().then((function(e){var a=[];e.forEach((function(e){"lastMessage"!=e.id&&(a=[].concat(Object(Y.a)(a),[e.data()]))})),g(a),c(!1)})),e.doc("lastMessage").onSnapshot((function(e){a.get().then((function(e){var a=[];e.forEach((function(e){"lastMessage"!=e.id&&(a=[].concat(Object(Y.a)(a),[e.data()]))})),g(a)}))})),T.onAuthStateChanged((function(e){e&&I.collection("users").doc(e.uid).get().then((function(e){L(e.data().displayName.split(" ")[0])}))}))}),[]);var k=function(){if(""!=x){var e={name:p,message:x,time:(new Date).valueOf()};g([e].concat(Object(Y.a)(h))),v("");var a=I.collection("session").doc(n).collection("chat");a.add(e).then((function(n){a.doc("lastMessage").set(e)}))}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:z.a.chatIcon,onClick:function(){return r(!0)},children:Object(b.jsx)(O.a,{icon:_.b})}),Object(b.jsxs)("div",{className:"".concat(z.a.container," ").concat(o?z.a.containerMobileShow:z.a.containerMobileHide),children:[Object(b.jsxs)("div",{className:z.a.header,children:[Object(b.jsx)("div",{className:z.a.headerBack,onClick:function(){return r(!1)},children:Object(b.jsx)(O.a,{icon:_.a})}),Object(b.jsx)("div",{className:z.a.headerName,children:a}),Object(b.jsx)("div",{className:z.a.headerInfo,children:Object(b.jsx)(O.a,{icon:_.d})})]}),Object(b.jsx)("div",{className:z.a.chatContent,children:h.map((function(e,a){return Object(b.jsxs)("div",{className:z.a.chat,children:[Object(b.jsx)("div",{className:z.a.chatName,children:e.name}),Object(b.jsx)("div",{className:z.a.message,children:e.message})]},a)}))}),Object(b.jsxs)("div",{className:z.a.input,children:[Object(b.jsx)("input",{placeholder:"send some message..",value:x,onKeyDown:function(e){"Enter"===e.key&&k()},onChange:function(e){return v(e.target.value)}}),Object(b.jsx)("div",{className:z.a.btn,onClick:k,children:"send"})]})]})]})}function V(e){var a=e.setLoading;return Object(b.jsxs)("div",{className:A.a.container,children:[Object(b.jsx)("div",{className:A.a.mainMenu,children:Object(b.jsx)(G,{})}),Object(b.jsx)("div",{className:A.a.globalChat,children:Object(b.jsx)(Q,{name:"Global Chat",setLoading:a,id:"mTdG3yuGbp2GBUNMggMg"})})]})}var q=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)(Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.keepTheme)();case 2:case"end":return e.stop()}}),e)})))),Object(b.jsx)(f.a,{basename:"/fangaraidee",children:Object(b.jsxs)("div",{className:E.a.container,children:[n&&Object(b.jsx)(g,{}),Object(b.jsx)("div",{className:E.a.navbar,children:Object(b.jsx)(D,{})}),Object(b.jsx)(F.c,{children:Object(b.jsx)(F.a,{exact:!0,path:"/",children:Object(b.jsx)(V,{setLoading:c})})})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,s=a.getTTFB;n(e),t(e),c(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.ad2b0323.chunk.js.map