(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return O}));var a=n(8),r=n.n(a),o=n(17),c=n(45),s=n(3),u=n(11),i=n(28),l=n(44),m={posts:[{id:1,post:"hi, how are you",likesCount:1},{id:2,post:"It`s my first post",likesCount:2}],profile:null,status:"",newPostText:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,post:t.text,likesCount:0},a=Object(s.a)({},e);return a.posts=Object(c.a)(e.posts),a.posts.push(n),a;case"DELETE-POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":var r;return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:Object(s.a)(Object(s.a)({},null===(r=e.profile)||void 0===r?void 0:r.photos),{},{large:t.large,small:t.small})})});case"UPDATE-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{aboutMe:t.aboutMe,contacts:t.contacts,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription})});default:return e}return e},d=function(e){return{type:"ADD-POST",text:e}},f=function(e){return{type:"SET-STATUS",status:e}},g=function(e,t,n,a){return{type:"UPDATE-PROFILE",aboutMe:e,contacts:t,lookingForAJobDescription:n,lookingForAJob:a}},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getUser(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getStatus(e);case 2:a=t.sent,n(f(null==a||""==a?"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430":a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.updateStatus(e);case 2:0==(a=t.sent).resultCode&&n(f(e)),0!==a.resultCode&&n(Object(l.d)("".concat(a.messages[0])));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,u.e.savePhoto(e);case 3:0==(a=t.sent).resultCode&&n((r=a.data.photos.small,o=a.data.photos.large,{type:"SAVE-PHOTO-SUCCESS",small:r,large:o}));case 6:case"end":return t.stop()}var r,o}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e,t,n,a,c,s,l,m,p,d,f,h){return function(){var v=Object(o.a)(r.a.mark((function o(v){var b,E,O;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return b={aboutMe:e,contacts:{github:n,vk:a,facebook:c,instagram:s,twitter:l,website:m,youtube:p,mainLink:d},lookingForAJob:h=void 0!=h,lookingForAJobDescription:f,fullName:t,userId:12090},E={github:n,vk:a,facebook:c,instagram:s,twitter:l,website:m,youtube:p,mainLink:d},r.next=5,u.e.formData(b);case 5:if(0!=(O=r.sent).resultCode){r.next=10;break}v(g(e,E,f,h)),r.next=12;break;case 10:return v(Object(i.a)("profeleData",{_error:O.messages[0]})),r.abrupt("return",Promise.reject(O.messages[0]));case 12:case"end":return r.stop()}}),o)})));return function(e){return v.apply(this,arguments)}}()}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(34),r=n(35),o=n(37),c=n(36),s=n(10),u=n(0),i=n.n(u),l=(n(148),n(12)),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(c.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(m)(t)}},11:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return m}));var a,r,o=n(92),c=n.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"aec09892-749d-4c42-b208-544b7f308b49"}}),s={getUsers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},u={deleteUser:e=>c.delete("follow/".concat(e)).then((function(e){return e.data})),postUser:e=>c.post("follow/".concat(e)).then((function(e){return e.data}))};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var i={authMe:()=>c.get("auth/me").then((function(e){return e.data})),login(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:()=>c.delete("auth/login").then((function(e){return e.data}))},l={getUser:e=>c.get("profile/"+e).then((function(e){return e.data})),getStatus:e=>c.get("profile/status/".concat(e)).then((function(e){return e.data})),updateStatus:e=>c.put("profile/status/",{status:e}).then((function(e){return e.data})),savePhoto(e){var t=new FormData;return t.append("image",e),c.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},formData:e=>c.put("/profile",e).then((function(e){return e.data}))},m={getCaptchaURL:()=>c.get("security/get-captcha-url").then((function(e){return e.data}))}},132:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(45),r=n(3),o={messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"}],newMessageText:"",dialogs:[{id:1,name:"Dimych",ava:"https://s00.yaplakal.com/pics/pics_original/9/9/2/15045299.jpg"},{id:2,name:"Andrey",ava:"https://klike.net/uploads/posts/2018-06/1528720172_1.jpg"},{id:3,name:"Sveta",ava:"https://klike.net/uploads/posts/2018-06/1528720227_2.png"},{id:4,name:"Sasha",ava:"https://klike.net/uploads/posts/2018-06/1528720246_5.jpg"},{id:5,name:"Viktor",ava:"https://klike.net/uploads/posts/2018-06/1528720305_6.jpg"},{id:6,name:"Valera",ava:"https://klike.net/uploads/posts/2018-06/1528720257_8.jpg"},{id:7,name:"Sergey",ava:"https://klike.net/uploads/posts/2020-06/1591514917_7.jpg"},{id:8,name:"Dimon",ava:"https://vjoy.cc/wp-content/uploads/2019/12/screenshot_3-min-13-640x570-1.png"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{newMessageText:"",messages:[].concat(Object(a.a)(e.messages),[{id:4,message:t.text}])});default:return e}},s=function(e){return{type:"ADD-MESSAGE",text:e}}},136:function(e,t,n){e.exports={wrapper:"Sidebar_wrapper__SDCfj"}},137:function(e,t,n){e.exports={avatar:"Sidebarfriends_avatar__1GGru"}},138:function(e,t,n){e.exports={avatar:"Avatar_avatar__4PJvH"}},143:function(e,t,n){e.exports=n.p+"static/media/Double Ring-2.2s-200px.1a5e1cfb.svg"},146:function(e,t,n){e.exports={error:"Error404_error__3K_OV"}},147:function(e,t,n){e.exports=n.p+"static/media/868843.6d8e81ad.svg"},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(31),c=n.n(o),s=n(94),u=function(e){return r.a.createElement("div",{className:c.a.message},e.message)},i=n(74),l=n(133),m=n(23),p=n(18),d=Object(m.a)(20),f=Object(l.a)({form:"message"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(i.a,{component:p.d,name:"messageText",validate:[m.b,d]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add message")))}));t.a=function(e){var t=e.state.dialogs.map((function(e){return r.a.createElement(s.a,{name:e.name,id:e.id,key:e.id,ava:e.ava})})),n=e.state.messages.map((function(e){return r.a.createElement(u,{message:e.message,key:e.id})}));return r.a.createElement("div",{className:c.a.dialogs},r.a.createElement("div",{className:c.a.dialogsItems},t),r.a.createElement("div",{className:c.a.messages},n,r.a.createElement(f,{onSubmit:function(t){e.addDialog(t.messageText)}})))}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3LCZV",item:"Navbar_item__r53jG",activeLink:"Navbar_activeLink__xML_-",error:"Navbar_error__1vUJu"}},174:function(e,t,n){e.exports=n(308)},179:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a),o=n(46),c=n.n(o),s=n(74),u=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,s=e.hasError,u=void 0===s?a&&o:s;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,e,{className:u?c.a.formControlError:""}))),u&&r.a.createElement("span",{className:c.a.error},o))},i=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,s=e.hasError,u=void 0===s?a&&o:s;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,e,{className:u?c.a.formControlError:""}))),u&&r.a.createElement("span",{className:c.a.error},o))},l=function(e,t,n,a){var o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return r.a.createElement("div",null,r.a.createElement(s.a,{placeholder:e||"",component:a,name:t,validate:n,type:o}),c)},m=function(e,t,n,a,o){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6?arguments[6]:void 0;return r.a.createElement("span",null,r.a.createElement(s.a,{placeholder:e||"",component:a,name:t,validate:n,type:o,value:u}),c)}},180:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(8),r=n.n(a),o=n(17),c=n(3),s=n(11),u=n(28),i={id:null,email:null,login:null,isAuth:!1,smallPhoto:null,captchaUrl:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(c.a)(Object(c.a)({},e),t.data);case"auth/SET-USER-SMALL-PHOTO":return Object(c.a)(Object(c.a)({},e),{},{smallPhoto:t.smallPhoto});case"GET-CAPTCHA-URL-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},m=function(e,t,n,a){return{type:"auth/SET-USER-DATA",data:{userId:e,email:t,login:n,isAuth:a}}},p=function(e){return{type:"auth/SET-USER-SMALL-PHOTO",smallPhoto:e}},d=function(e,t,n,a){return function(){var c=Object(o.a)(r.a.mark((function o(c){var i,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.c.login(e,t,n,a);case 2:if(0!=(i=r.sent).resultCode){r.next=7;break}c((function(e){var t,n,a;s.c.authMe().then((function(r){r.resultCode==s.b.Success&&(t=r.data.id,n=r.data.login,a=r.data.email,e(m(t,a,n,!0)))})).then((function(){s.e.getUser(t).then((function(t){e(p(t.photos.small))}))}))})),r.next=13;break;case 7:if(i.resultCode!=s.a.CaptchaIsRequired){r.next=10;break}return r.next=10,c(f());case 10:return l=i.messages.length>0?i.messages[0]:"some error",r.next=13,c(Object(u.a)("login",{_error:l}));case 13:case"end":return r.stop()}}),o)})));return function(e){return c.apply(this,arguments)}}()},f=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.f.getCaptchaURL();case 2:n=e.sent,a=n.url,t({type:"GET-CAPTCHA-URL-SUCCESS",captchaUrl:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.logout().then((function(e){0==e.resultCode&&t(m(null,null,null,!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},30:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__-wuiL",name:"Users_name__2bmY7",button:"Users_button__2N4oX",status:"Users_status__RtvUu",photo:"Users_photo__1F6QW",city:"Users_city__HEX6h",country:"Users_country__BhW2t",wrapper:"Users_wrapper__2vPFF",selectedPage:"Users_selectedPage__eiYT-"}},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(135),c=n.n(o),s=(n(179),n(34)),u=n(35),i=n(37),l=n(36),m=(n(180),n(16)),p=n.n(m),d=n(13),f={friends:[{id:1,name:"Dimych",ava:"https://s00.yaplakal.com/pics/pics_original/9/9/2/15045299.jpg"},{id:2,name:"Andrey",ava:"https://klike.net/uploads/posts/2018-06/1528720172_1.jpg"},{id:3,name:"Sveta",ava:"https://klike.net/uploads/posts/2018-06/1528720227_2.png"},{id:4,name:"Sasha",ava:"https://klike.net/uploads/posts/2018-06/1528720246_5.jpg"},{id:5,name:"Viktor",ava:"https://klike.net/uploads/posts/2018-06/1528720305_6.jpg"},{id:6,name:"Valera",ava:"https://klike.net/uploads/posts/2018-06/1528720257_8.jpg"},{id:7,name:"Sergey",ava:"https://klike.net/uploads/posts/2020-06/1591514917_7.jpg"},{id:8,name:"Dimon",ava:"https://vjoy.cc/wp-content/uploads/2019/12/screenshot_3-min-13-640x570-1.png"}]};function g(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)}for(var h=f.friends.length;h>3;h--)f.friends.splice(g(0,f.friends.length-1),1);var v=n(136),b=n.n(v),E=n(137),O=n.n(E),j=function(e){return r.a.createElement("div",{className:O.a.avatar},r.a.createElement("img",{src:e.ava}),r.a.createElement("div",null,e.name))},_=(n(94),function(e){window.onload=function(){e.addFriends()};var t=e.threefriends.map((function(e){return r.a.createElement(j,{name:e.name,key:e.id,ava:e.ava})}));return r.a.createElement("div",null,"FRIENDS",r.a.createElement("div",{className:b.a.wrapper},t))}),S=n(12),C=Object(S.b)((function(e){return{threefriends:e.sidebar.friends}}),(function(e){return{addFriends:function(){e({type:"ADD-THREE-FRIENDS"})}}}))(_),w=function(e){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),r.a.createElement("div",{className:"".concat(p.a.active," ").concat(p.a.item)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:p.a.activeLink},"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:p.a.activeLink},"Settings")),r.a.createElement("div",{className:p.a.item},r.a.createElement(C,null)))},U=n(10),k=(n(189),function(e){return r.a.createElement("div",null,"Settings")}),P=(n(190),function(e){return r.a.createElement("div",null,"News")}),N=n(8),y=n.n(N),A=n(17),T=n(45),x=n(3),I=n(11),L=function(e,t,n,a){return e.map((function(e){return e.objPropName===t?Object(x.a)(Object(x.a)({},e),a):e}))},R={users:[],pageSize:5,totalUsersCount:0,currentPage:1,numberChange:0,isFetching:!1,followingInProgress:[]},D=function(e){return{type:"FOLLOW",userId:e}},F=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET-USERS",users:e}},G=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},H=function(e){return{type:"ON-NUMBER-CHANGE",number:e}},z=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},B=function(e,t){return{type:"TOGGLE-IS-FETCHING-PROGRESS",isFetching:e,userId:t}},J=function(){var e=Object(A.a)(y.a.mark((function e(t,n,a,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,a(n);case 3:0==e.sent.resultCode&&t(r(n)),t(B(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),V=n(30),W=n.n(V),q=n(69),X=n.n(q),Y=n(23),K=n(18),Z=n(71),Q=n(60),$=n.n(Q),ee=n(74),te=n(133),ne=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],o=1;o<=t;o++)n.push(o);var c=Object(a.useState)(0),s=Object(Z.a)(c,2),u=s[0],i=s[1],l=Object(a.useState)(10),m=Object(Z.a)(l,2),p=m[0],d=m[1],f=Object(a.useState)([1,2,3,4,5,6,7,8,9,10]),g=Object(Z.a)(f,2),h=g[0],v=g[1];0==u&&i(1);var b=Object(Y.a)(4),E=Object(te.a)({form:"searchPage"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ee.a,{component:K.d,name:"searchPage",validate:[Y.b,b],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})),r.a.createElement("div",null,r.a.createElement("button",null,"\u041f\u043e\u0438\u0441\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b")))}));return r.a.createElement("div",null,r.a.createElement("div",null,1!=u&&r.a.createElement("span",{onClick:function(){d(p-=10),i(u-=10);var e=n.filter((function(e){return e<=p&&e>=u}));v(e)},className:$.a.notActive},"Previous"),h.map((function(t){return r.a.createElement("span",{onClick:function(){e.onPageChanged(t)},className:e.currentPage==t?$.a.current:$.a.notActive}," ",t," ")})),p!=n.length&&r.a.createElement("span",{onClick:function(){d(p+=10),i(u+=10);var e=n.filter((function(e){return e<=p&&e>=u}));v(e)},className:$.a.notActive},"Next")),r.a.createElement("div",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",r.a.createElement(E,{initialValues:{value:e.currentPage},onSubmit:function(t){e.onPageChanged(t.searchPage)}})))},ae=function(e){var t=e.user,n=e.followingInProgress,a=e.deleteUser,o=e.postUser;return r.a.createElement("div",{className:W.a.margin},r.a.createElement("div",{className:W.a.wrapper},r.a.createElement("div",{className:W.a.photo},r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.large?t.photos.large:X.a,className:W.a.userPhoto}))),r.a.createElement("div",{className:W.a.name},t.name),r.a.createElement("div",{className:W.a.city},t.id),r.a.createElement("div",{className:W.a.status},null!=t.status?t.status:"userStatus"),r.a.createElement("div",{className:W.a.button},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e==t.id})),onClick:function(){a(t.id)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):r.a.createElement("button",{disabled:n.some((function(e){return e==t.id})),onClick:function(){o(t.id)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",{className:W.a.country},"props.location.country")))},re=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443",r.a.createElement(ne,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize})),e.users.map((function(t){return r.a.createElement(ae,{key:t.id,user:t,followingInProgress:e.followingInProgress,deleteUser:e.deleteUser,postUser:e.postUser})})))},oe=n(48),ce=n(7),se=n(144),ue=function(e){return e.usersPage.users},ie=Object(se.a)(ue,(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},me=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.isFetching},ge=function(e){return e.usersPage.followingInProgress},he=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props,a=n.setCurrentPage,r=n.requestUsers,o=n.pageSize;a(t),r(t,o)},e.onNumberChange=function(e){var t=e.target.value;H(t)},e.searchNumber=function(){var t=e.props,n=t.searchNumber,a=t.requestUsers,r=t.currentPage,o=t.pageSize;n(),a(r,o)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;(0,e.requestUsers)(t,n)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(oe.a,null):null,r.a.createElement("h3",null,this.props.pageTitle),r.a.createElement(re,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,deleteUser:function(){return e.props.deleteUser},postUser:function(){return e.props.postUser}}))}}]),n}(r.a.Component),ve=Object(ce.d)(Object(S.b)((function(e){return{totalUsersCount:me(e),pageSize:le(e),users:ie(e),currentPage:pe(e),numberChange:de(e),isFetching:fe(e),followingInProgress:ge(e)}}),{setUsers:M,setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},setTotalUsersCount:G,searchNumber:function(){return{type:"SEARCH-NUMBER"}},toggleIsFetching:z,toggleIsFetchingProgress:B,requestUsers:function(e,t){return function(){var n=Object(A.a)(y.a.mark((function n(a,r){var o;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(z(!0)),n.next=3,I.g.getUsers(e,t);case 3:o=n.sent,a(z(!1)),a(M(o.items)),a(G(o.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},deleteUser:function(e){return function(){var t=Object(A.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=I.d.deleteUser.bind(e),J(n,e,a,F);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},postUser:function(e){return function(){var t=Object(A.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=I.d.postUser.bind(e),J(n,e,a,D);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},onNumberChange:H}))(he),be=(n(307),function(e){return r.a.createElement("div",null,"Music")}),Ee=n(40),Oe=n.n(Ee),je=function(e){return r.a.createElement("header",{className:Oe.a.header},r.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:Oe.a.loginBlock},e.isAuth?r.a.createElement("div",{className:Oe.a.wrapper},r.a.createElement("div",{className:Oe.a.item},r.a.createElement("img",{src:null==e.smallPhoto?X.a:e.smallPhoto})),r.a.createElement("div",{className:Oe.a.item}," ",e.login),r.a.createElement("button",{className:Oe.a.item,onClick:e.LogoutAC},"Log out")):r.a.createElement(d.b,{to:"/login",activeClassName:Oe.a.activeLink},"Login")))},_e=(n(92),n(29)),Se=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(je,this.props)}}]),n}(r.a.Component),Ce=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId}}),{LogoutAC:_e.b})(Se),we=n(46),Ue=n.n(we),ke=n(101),Pe=Object(te.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(K.a)("Email","email",[Y.b],K.c),Object(K.a)("Password","password",[Y.b],K.c,"password"),Object(K.a)(null,"rememberMe",null,K.c,"checkbox","RememberMe"),a&&r.a.createElement("div",null,r.a.createElement("img",{src:a}),Object(K.a)("captcha","captcha",[Y.b],K.c)),n&&r.a.createElement("div",{className:Ue.a.formSummmayError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ne=function(e){return e.isAuth?r.a.createElement(U.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Pe,{onSubmit:function(t){e.LoginAC(t.email,t.password,t.rememberMe,t.captcha),console.log(t)},captchaUrl:e.captchaUrl}))},ye=(Object(ke.a)(Ne),Object(ce.d)(Object(S.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{LogoutAC:_e.b,LoginAC:_e.a}))(Ne)),Ae=n(44),Te=n(100),xe=n(145),Ie=n(134),Le=n(132),Re=Object(ce.c)({profilePage:Te.d,dialogsPage:Le.b,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-THREE-FRIENDS":default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:L(e.users,t.userId,0,{followed:!0})});case"UNFOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:L(e.users,t.userId,0,{followed:!1})});case"SET-USERS":return Object(x.a)(Object(x.a)({},e),{},{users:Object(T.a)(t.users)});case"SET-CURRENT-PAGE":return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalCount});case"ON-NUMBER-CHANGE":return Object(x.a)(Object(x.a)({},e),{},{numberChange:t.number});case"SEARCH-NUMBER":return e.numberChange>=1&&e.numberChange<=e.totalUsersCount/e.pageSize?Object(x.a)(Object(x.a)({},e),{},{currentPage:e.numberChange}):Object(x.a)(Object(x.a)({},e),{},{currentPage:1});case"TOGGLE-IS-FETCHING":return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FETCHING-PROGRESS":return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(T.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:_e.c,form:Ie.a,app:Ae.a}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Fe=Object(ce.e)(Re,De(Object(ce.a)(xe.a)));window.__store__=Fe;var Me=Fe,Ge=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(oe.a,null)},r.a.createElement(e,t))}},He=n(146),ze=n.n(He),Be=n(147),Je=n.n(Be),Ve=function(e){return r.a.createElement("div",null,r.a.createElement("img",{className:ze.a.error,src:Je.a}))},We=n(93),qe=n.n(We),Xe=r.a.lazy((function(){return n.e(4).then(n.bind(null,321))})),Ye=r.a.lazy((function(){return n.e(3).then(n.bind(null,322))})),Ke=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ce,null),r.a.createElement(w,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(U.d,null,r.a.createElement(U.b,{exact:!0,path:"/",render:Ge(Ye)}),r.a.createElement(U.b,{path:"/dialogs",render:Ge(Xe)}),r.a.createElement(U.b,{path:"/profile/:userId?",render:Ge(Ye)}),r.a.createElement(U.b,{path:"/users",render:function(){return r.a.createElement(ve,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),r.a.createElement(U.b,{path:"/login",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(U.b,{path:"/music",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(U.b,{path:"/news",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(U.b,{path:"/settings",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(U.b,{path:"*",render:function(){return r.a.createElement(Ve,null)}}))),r.a.createElement("div",{className:"error"},this.props.globalError)):r.a.createElement(oe.a,null)}}]),n}(r.a.Component),Ze=Object(ce.d)(U.g,Object(S.b)((function(e){return{initialized:e.app.initialized,globalError:e.app.globalError}}),{initializeApp:Ae.b,letError:Ae.c}))(Ke),Qe=function(e){return r.a.createElement(d.a,{basename:qe.a.env.PUBLIC_URL},r.a.createElement(S.a,{store:Me},r.a.createElement(Ze,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Qe,null),document.getElementById("root"))},31:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2yvhM",dialog:"Dialogs_dialog__k930i",dialogsItems:"Dialogs_dialogsItems__1eIO1",active:"Dialogs_active__2jYKT",messages:"Dialogs_messages__3cD4p",message:"Dialogs_message__3I8nx"}},40:function(e,t,n){e.exports={header:"Header_header__2v6Qh",loginBlock:"Header_loginBlock__3uozL",wrapper:"Header_wrapper__1sROT",item:"Header_item__2DBve"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(3),r=n(29),o=n(11),c="ERROR",s={initialized:!1,globalError:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{globalError:t.error});case"INITIALIZED-SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{initialized:!0});default:return e}},i=function(e){return{type:c,error:e}},l=function(e){return function(t){t(i(e)),setTimeout((function(){t(i(""))}),5e3)}},m=function(){return function(e){var t,n,a;o.c.authMe().then((function(o){0==o.resultCode&&(t=o.data.id,n=o.data.login,a=o.data.email,e(Object(r.d)(t,a,n,!0)))})).then((function(){o.e.getUser(t).then((function(t){e(Object(r.e)(t.photos.small))}))})).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}},46:function(e,t,n){e.exports={formControlError:"FormControls_formControlError__uemkh",error:"FormControls_error__1WXK3",formSummmayError:"FormControls_formSummmayError__3r7xW"}},48:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(306),n(143)),c=n.n(o);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:c.a}))}},60:function(e,t,n){e.exports={current:"Paginator_current__2t5fU",notActive:"Paginator_notActive__1bMe3"}},69:function(e,t,n){e.exports=n.p+"static/media/instami-avatarka-v-instagram-9.47699637.png"},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(31),c=n.n(o),s=n(13),u=n(138),i=n.n(u),l=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:i.a.avatar},r.a.createElement("img",{src:e.state.ava})),r.a.createElement("span",null,e.state.name))};t.a=function(e){return r.a.createElement("div",{className:c.a.dialog+" "+c.a.active},r.a.createElement(s.b,{to:"/dialogs/"+e.id},r.a.createElement(l,{state:e})))}}},[[174,1,2]]]);
//# sourceMappingURL=main.87f684f8.chunk.js.map