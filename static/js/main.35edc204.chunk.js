(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[0],{125:function(e,t,n){"use strict";var a=n(58),r=n(0),o=n.n(r),c=n(26),u=n(10),s=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){return Object(u.b)(s,{})((function(t){t.isAuth;var n=Object(a.a)(t,["isAuth"]);return!1===t.isAuth?o.a.createElement(c.a,{to:"/Login"}):o.a.createElement(e,n)}))}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(33),r=n(2),o={sendMassageCreator:function(e){return{type:"SEND_MASSAGE",massage:e}}},c={massageData:[{id:1,text:"Yo, get up"},{id:2,text:"How are you"},{id:3,text:"Yo, get up"}],dialogsData:[{id:1,name:"Bohdan"},{id:2,name:"Florian"},{id:3,name:"Robert"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MASSAGE":return Object(r.a)(Object(r.a)({},e),{},{massageData:[].concat(Object(a.a)(e.massageData),[{id:6,text:t.massage}])});default:return e}}},132:function(e,t,n){e.exports={category:"Category_category__21Y1L"}},133:function(e,t,n){e.exports={ldshourglass:"hourglass_ldshourglass__38xUy"}},136:function(e,t,n){e.exports={profile:"News_profile__27w1n"}},137:function(e,t,n){e.exports={event:"MyEvent_event__1xJGc"}},14:function(e,t,n){e.exports={eventItem:"Events_eventItem__3HTHs",eventContent:"Events_eventContent__2x0rp",eventHeader:"Events_eventHeader__3pIpT",eventFilter:"Events_eventFilter__3Xs_p",active:"Events_active__JgLGW"}},164:function(e,t,n){e.exports=n(290)},166:function(e,t,n){},170:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(58);var a=n(0),r=n.n(a),o=(n(41),n(89));function c(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:" ";return r.a.createElement("div",null,r.a.createElement(o.a,Object.assign({placeholder:e,name:t,validate:n,component:a},c)),u)}},21:function(e,t,n){e.exports={header:"Header_header__q-0oV",headerText:"Header_headerText__2RZQp",login:"Header_login__1pTLq",search:"Header_search__1JjKf",active:"Header_active__29ndQ",menu:"Header_menu__3bLiA"}},290:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=(n(166),n(68)),u=n.n(c),s=n(29),l=n(30),i=n(34),p=n(32),f=(n(170),n(59)),m=n.n(f),d=n(11),v=n(10),h=n(6),E=n.n(h),g=n(12),b=n(2),O=n(130),w=n.n(O).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0ec4be5c-05ae-403f-b660-0e7e553f2d34"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var _=n(25),j=function(e){return w.get("profile/"+e).then((function(e){return e.data}))},P=function(e){return w.get("/profile/status/".concat(e)).then((function(e){return e.data}))},y=function(e){return w.put("/profile/status",{status:e})},S=function(e){var t=new FormData;return t.append("image",e),w.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},x=function(e){return w.put("/profile/",e)},k={profileData:null,status:" "},D=function(e){return{type:"SET_USER_PROFILE",profileData:e}},C=function(e){return{type:"SET_STATUS_PROFILE",status:e}},T=function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}},I=function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:a=t.sent,n(D(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profileData:t.profileData});case"SET_STATUS_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{profileData:Object(b.a)(Object(b.a)({},e.profileData),{},{photos:t.photos})});default:return e}},A=function(e){Object(i.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getProfileInfo(this.props.userID)}},{key:"render",value:function(){var e;return o.a.createElement("div",{className:m.a.profile},o.a.createElement("h3",null,"Profile menu"),this.props.isAuth&&null!=this.props.profileData?o.a.createElement("img",{src:null===(e=this.props.profileData.photos)||void 0===e?void 0:e.small}):o.a.createElement("img",{src:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}),o.a.createElement("h4",null,o.a.createElement(d.b,{to:"/Dialogs",activeClassName:m.a.active},"My Dialogs")),o.a.createElement("h4",null,o.a.createElement(d.b,{to:"/Posts",activeClassName:m.a.active},"My Posts")),o.a.createElement("h4",null,o.a.createElement(d.b,{to:"/Profile",activeClassName:m.a.active},"Profile")))}}]),n}(o.a.Component),U=Object(v.b)((function(e){return{profileData:e.myProfilePage.profileData,isAuth:e.auth.isAuth,userID:e.auth.userID,status:e.myProfilePage.status}}),{getProfileInfo:I})(A),L=n(132),F=n.n(L);var M=function(){return o.a.createElement("div",{className:F.a.category},o.a.createElement("h1",null,"Category"))},R=n(26),H=n(33),G=function(e,t){return w.get("users?Page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},z=function(e){return w.delete("follow/".concat(e)).then((function(e){return e.data}))},J=function(e){return w.post("follow/".concat(e)).then((function(e){return e.data}))},V={followSuccess:function(e){return{type:"FOLLOW",userID:e}},unfollowSuccess:function(e){return{type:"UNFOLLOW",userID:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SET_TOTAL_USERS",totalCount:e}},toggleFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},toggleFollowingProgress:function(e,t){return{type:"FOLLOFING_IN_PROGRESS",isFetching:e,userID:t}}},W={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},B=function(e,t,n,r){r(V.toggleFollowingProgress(!0,e)),n.resultCode===a.Success&&r(t(e)),r(V.toggleFollowingProgress(!1,e))},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case"SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"SET_TOTAL_USERS":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"FOLLOFING_IN_PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},q=n(36),Y=n.n(q);var Z=function(e){var t=e.follow,n=e.unfollow,a=e.followingInProgress,r=e.user;return o.a.createElement("div",{className:Y.a.users},o.a.createElement("span",null,o.a.createElement(d.b,{exact:!0,to:"/Profile/"+r.id},o.a.createElement("div",null,o.a.createElement("img",{src:null!=r.photos.small?r.photos.small:"https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png",alt:"No Avatar"}))),o.a.createElement("div",null,r.followed?o.a.createElement("button",{disabled:a.some((function(e){return e===r.id})),onClick:function(){n(r.id)}},"Unfollow"):o.a.createElement("button",{disabled:a.some((function(e){return e===r.id})),onClick:function(){t(r.id)}},"Follow"),o.a.createElement("button",null,"Like"))),o.a.createElement("div",null,r.name),o.a.createElement("div",null,r.status),o.a.createElement("div",null," ",r.id))};var Q=function(e){var t=e.users,n=e.follow,a=e.unfollow,r=e.followingInProgress;return o.a.createElement("div",{className:Y.a.users},o.a.createElement("h1",null,"USER LIST"),t.map((function(e){return o.a.createElement(Z,{key:e.id,user:e,followingInProgress:r,unfollow:a,follow:n})})))},X=n(7),$=n(133),ee=n.n($);var te=function(){return o.a.createElement("div",{className:ee.a.ldshourglass})},ne=n(134),ae=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},le=n(42);var ie=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.onPageChanged,c=e.currentPage,u=e.portionSize,s=Math.ceil(t/n),l=[],i=1;i<=s;i++)l.push(i);var p=Math.ceil(s/u),f=Object(r.useState)(1),m=Object(le.a)(f,2),d=m[0],v=m[1],h=(d-1)*u+1,E=d*u;return o.a.createElement("div",{className:Y.a.border},d>1&&o.a.createElement("button",{onClick:function(){v(d-1)}},"prev"),l.filter((function(e){return e>=h&&e<=E})).map((function(e){return o.a.createElement("span",{className:c===e?Y.a.selected:Y.a.pageNumber,key:e,onClick:function(t){a(e)}},e)})),p>d&&o.a.createElement("button",{onClick:function(){v(d+1)}},"next"))},pe=function(e){Object(i.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return this.props.isFetching?o.a.createElement(te,null):o.a.createElement("div",null,o.a.createElement(ie,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,portionSize:10}),o.a.createElement(Q,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(o.a.Component),fe=Object(X.d)(Object(v.b)((function(e){return{users:ae(e),pageSize:re(e),totalUsersCount:oe(e),currentPage:ce(e),isFetching:ue(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:a=t.sent,B(e,V.followSuccess,a,n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:a=t.sent,B(e,V.unfollowSuccess,a,n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:V.setCurrentPage,toggleFollowingProgress:V.toggleFollowingProgress,getUsersThunkCreator:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(V.toggleFetching(!0)),n.next=3,G(e,t);case 3:r=n.sent,a(V.setTotalUsersCount(r.totalCount)),a(V.setUsers(r.items)),a(V.toggleFetching(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(pe),me=n(55),de=n.n(me),ve=n(18),he=n(127),Ee=n(41),ge=n.n(Ee);var be=Object(he.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profileData,a=e.error;return o.a.createElement("form",null,a&&o.a.createElement("div",{className:ge.a.summaryError},a),o.a.createElement("button",{onClick:t},"Save"),o.a.createElement("div",null,o.a.createElement("b",null,"Full nave"),": ",Object(ve.a)("Full Name","fullName",[],"input")," "),o.a.createElement("div",null,o.a.createElement("b",null,"Looking for a job"),": ",Object(ve.a)("","lookingForAJob",[],"Input",{type:"checkbox"})),o.a.createElement("div",null,o.a.createElement("b",null,"My skills"),": ",Object(ve.a)("My skills","lookingForAJobDescription",[],"textarea")),o.a.createElement("div",null,o.a.createElement("b",null,"About me"),": ",Object(ve.a)("About me","aboutMe",[],"textarea")," "),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts:"),Object.keys(n.contacts).map((function(e){return o.a.createElement("div",null,o.a.createElement("b",null," ",e," :")," ",Object(ve.a)(e,"contacts."+e,[],"input"))}))))}));function Oe(e){var t=e.profileData,n=e.isOwner,a=e.goToEditMode;return o.a.createElement("div",null,o.a.createElement("h1",null,t.fullName," "),o.a.createElement("h4",null,"About me: ",t.lookingForAJobDescription),o.a.createElement("div",null,o.a.createElement("b",null,"Need work: ")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&o.a.createElement("div",null,o.a.createElement("b",null,"About job:")," ",t.lookingForAJobDescription),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts:"),Object.keys(t.contacts).map((function(e){return o.a.createElement(we,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),n&&o.a.createElement("button",{onClick:a},"Edit mode"))}function we(e){var t=e.contactTitle,n=e.contactValue;return o.a.createElement("div",{className:de.a.contacts},o.a.createElement("b",null,t)," ",n)}var _e=function(e){var t=Object(r.useState)(!1),n=Object(le.a)(t,2),a=n[0],c=n[1];if(!e.profileData)return o.a.createElement(te,null);var u=function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.saveProfile(n);case 2:c(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("img",{className:de.a.avatarPhoto,src:e.profileData.photos.large||"https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png"}),o.a.createElement("div",null,e.isOwner&&o.a.createElement("input",{type:"file",onChange:function(t){var n;(null===(n=t.target.files)||void 0===n?void 0:n.length)&&e.savePhoto(t.target.files[0])}})),a?o.a.createElement(be,Object.assign({initialValues:e.profileData},e,{onSubmit:u})):o.a.createElement(Oe,Object.assign({},e,{goToEditMode:function(){c(!0)}})))};var je=function(e){var t=Object(r.useState)(!1),n=Object(le.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(e.status),s=Object(le.a)(u,2),l=s[0],i=s[1];return Object(r.useEffect)((function(){i(e.status)}),[e.status]),o.a.createElement("div",null,!a&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"no status")),a&&o.a.createElement("div",null,o.a.createElement("input",{autoFocus:!0,onChange:function(e){i(e.currentTarget.value)},onBlur:function(){c(!1),e.updateProfileStatus(l)},value:l})))},Pe=function(e){return{type:"ADD_POST",post:e}},ye=function(e){return{type:"LIKE_POST",postID:e}},Se=function(e){return{type:"DELETE_POST",postID:e}},xe={postData:[{id:1,postText:"So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",postLike:2,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"},{id:2,postText:"In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",postLike:3,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"},{id:3,postText:"Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",postLike:6,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}],newPostText:" "},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:e.postData.length+1,postText:t.post,postLike:0,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"};return Object(b.a)(Object(b.a)({},e),{},{postData:[].concat(Object(H.a)(e.postData),[n]),newPostText:" "});case"LIKE_POST":return Object(b.a)(Object(b.a)({},e),{},{postData:e.postData.map((function(e){return e.id===t.postID?Object(b.a)(Object(b.a)({},e),{},{postLike:e.postLike+1}):e}))});case"DELETE_POST":return Object(b.a)(Object(b.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postID}))});default:return e}},De=n(94),Ce=n.n(De),Te=n(37),Ie=Object(Te.a)(15),Ne=Object(he.a)({form:"post"})((function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",null,Object(ve.a)("Post","Post",[Te.b,Ie],"Textarea")),o.a.createElement("button",null," Add post"))}));var Ae=function(e){var t=e.isAuth,n=e.postData,a=e.postLikeThunk,r=e.addPostThunk,c=e.deletePost;if(!1===t)return o.a.createElement(R.a,{to:"/Login"});var u=n.map((function(e){return o.a.createElement("div",{className:Ce.a.post},o.a.createElement("div",null,o.a.createElement("img",{alt:"no",src:e.postAvatar})),o.a.createElement("div",null,e.postText),o.a.createElement("div",null,"Like: ",e.postLike),o.a.createElement("button",{onClick:function(){a(e.id)}},"like"),o.a.createElement("button",{onClick:function(){c(e.id)}},"delete"))}));return o.a.createElement("div",null,o.a.createElement("div",{className:Ce.a.post},o.a.createElement("img",{alt:"o",src:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}),o.a.createElement(Ne,{onSubmit:function(e){r(e.Post)}})),o.a.createElement("div",null,u))},Ue=n(125);var Le=Object(X.d)(Object(v.b)((function(e){return{postData:e.postPage.postData,newPostText:e.postPage.newPostText,isAuth:e.auth.isAuth}}),{addPostThunk:function(e){return function(t){t(Pe(e))}},postLikeThunk:function(e){return function(t){t(ye(e))}},deletePost:function(e){return function(t){t(Se(e))}}}),Ue.a)((function(e){return o.a.createElement(Ae,e)}));var Fe=function(e){return o.a.createElement("div",{className:de.a.profile},o.a.createElement(_e,{saveProfile:e.saveProfile,profileData:e.profileData,isOwner:e.isOwner,savePhoto:e.savePhoto}),o.a.createElement(je,{status:e.status,updateProfileStatus:e.updateProfileStatus,getProfileStatus:e.getProfileStatus}),o.a.createElement(Le,null))},Me=function(e){Object(i.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userID;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getProfileInfo(e),this.props.getProfileStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.status!=e.status&&this.refreshProfile()}},{key:"render",value:function(){return o.a.createElement(Fe,{saveProfile:this.props.saveProfile,savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userID,profileData:this.props.profileData,status:this.props.status,updateProfileStatus:this.props.updateProfileStatus,getProfileStatus:this.props.getProfileStatus})}}]),n}(o.a.Component),Re=Object(X.d)(Object(v.b)((function(e){return{profileData:e.myProfilePage.profileData,status:e.myProfilePage.status,authUserId:e.auth.userID}}),{getProfileStatus:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:a=t.sent,n(C(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatus:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:t.sent.data.resultCode===a.Success&&n(C(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.status);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getProfileInfo:I,savePhoto:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:(r=t.sent).data.resultCode===a.Success&&n(T(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n,r){var o,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userID,t.next=3,x(e);case 3:if((c=t.sent).data.resultCode!==a.Success){t.next=8;break}n(I(o)),t.next=10;break;case 8:return n(Object(_.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),R.g)(Me),He=n(136),Ge=n.n(He);var ze=function(e){var t=e.newsData;return o.a.createElement("div",{className:Ge.a.news},o.a.createElement("h1",null,"News!"),t.map((function(e){return o.a.createElement("div",null,e.title)})))};var Je=Object(v.b)((function(e){return{newsData:e.newsPage.newsData}}),{})((function(e){return o.a.createElement(ze,{newsData:e.newsData})})),Ve=n(14),We=n.n(Ve);function Be(e){var t=e.poster,n=e.text,a=e.id,r=e.addEvent;return o.a.createElement("div",null,o.a.createElement("img",{alt:"0",src:t}),o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("button",{id:"addEvent",onClick:function(){return r(a,n)}},"Accept Event")))}function Ke(e){var t=e.eventData,n=e.addEvent;return o.a.createElement("div",null,o.a.createElement("div",{className:We.a.eventItem},t.filter((function(e){return"full"===e.type})).map((function(e){return o.a.createElement(Be,Object.assign({},e,{addEvent:n}))}))))}function qe(e){var t=e.eventData,n=e.addEvent;return o.a.createElement("div",null,o.a.createElement("div",{className:We.a.eventItem},t.filter((function(e){return"5km"===e.type})).map((function(e){return o.a.createElement(Be,Object.assign({},e,{addEvent:n}))}))))}function Ye(e){var t=e.eventData,n=e.addEvent;return o.a.createElement("div",null,o.a.createElement("div",{className:We.a.eventItem},t.filter((function(e){return"10km"===e.type})).map((function(e){return o.a.createElement(Be,Object.assign({},e,{addEvent:n}))}))))}function Ze(e){var t=e.eventData,n=e.addEvent;return o.a.createElement("div",null,o.a.createElement("div",{className:We.a.eventItem},t.filter((function(e){return"half"===e.type})).map((function(e){return o.a.createElement(Be,Object.assign({},e,{addEvent:n}))}))))}function Qe(e){var t=e.eventData,n=e.addEvent;return o.a.createElement("div",{className:We.a.eventItem},t.map((function(e){return o.a.createElement(Be,Object.assign({},e,{addEvent:n}))})))}var Xe={addEvent:function(e,t){return{type:"ADD_EVENT",eventID:e,evText:t}},clean:function(){return{type:"CLEAN"}}},$e={eventData:[{id:1,text:"Trail Voskresinitska gora",poster:"https://image.freepik.com/free-vector/_21856-1.jpg",type:"full"},{id:2,text:"Blue Lake Cup Spring 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1574/662.png",type:"5km"},{id:3,text:"Kharkiv Half Marathon 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg",type:"full"},{id:4,text:"4th RAIN Mohrytsia Eco Trail 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg",type:"10km"},{id:5,text:"Sumy Duathlon 27.5",poster:"https://saycheese.com.ua/wp-content/uploads/2020/03/photo_2020-03-26-17.05.36.jpeg",type:"10km"},{id:6,text:"Blue Lake Cup Spring 2020",poster:"https://www.active.net.ua/wp-content/uploads/2017/10/RAIN-Mohrytsia-Eco-Trail-2020.jpg",type:"half"},{id:7,text:"Kharkiv International Marathon",poster:"https://www.active.net.ua/wp-content/uploads/2016/12/Kharkiv-International-Marathon.jpg",type:"half"},{id:8,text:"4th RAIN Mohrytsia Eco Trail 2020",poster:"https://image.shutterstock.com/image-vector/running-marathon-people-run-colorful-600w-633344339.jpg",type:"full"}],myEvents:[]},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":return e.eventData.map((function(n){t.eventID===n.id&&e.myEvents.push(t.evText)})),Object(b.a)(Object(b.a)({},e),{},{myEvents:Object(H.a)(e.myEvents)});case"CLEAN":return Object(b.a)(Object(b.a)({},e),{},{myEvents:[]});default:return e}};var tt=function(){return o.a.createElement("div",{className:We.a.eventHeader},o.a.createElement(d.b,{exact:!0,to:"/Events/Full-Marathons",activeClassName:We.a.active},"Full Marathons"),o.a.createElement(d.b,{to:"/Events/Half-Marathons",activeClassName:We.a.active},"Half Marathons"),o.a.createElement(d.b,{to:"/Events/10km-Marathons",activeClassName:We.a.active},"10km Runs"),o.a.createElement(d.b,{to:"/Events/5km-Marathons",activeClassName:We.a.active},"5km Runs"))};var nt=function(){return o.a.createElement("div",{className:We.a.eventFilter},o.a.createElement("div",null,"Event Filter"),o.a.createElement("div",null,"Price:"),o.a.createElement("input",{id:"input",type:"range",min:"100",max:"200",step:"2"}),o.a.createElement("div",null,"Difficulty:"),o.a.createElement("input",{id:"input",type:"range",min:"100",max:"200",step:"2"}),o.a.createElement("div",null,"Rating:"),o.a.createElement("input",{id:"input",type:"range",min:"100",max:"200",step:"2"}),o.a.createElement("div",null,o.a.createElement("button",null,"Find Events")))};var at=Object(v.b)((function(e){return{eventData:e.eventPage.eventData,myEvents:e.eventPage.myEvents}}),{addEvent:Xe.addEvent})((function(e){return o.a.createElement("div",{className:We.a.eventContent},o.a.createElement(nt,null),o.a.createElement(tt,null),o.a.createElement("div",{className:"events-content"},o.a.createElement(R.d,null,o.a.createElement(R.b,{exact:!0,path:"/Events",render:function(){return o.a.createElement(Qe,e)}}),o.a.createElement(R.b,{exact:!0,path:"/Events/Half-Marathons",render:function(){return o.a.createElement(Ze,e)}}),o.a.createElement(R.b,{exact:!0,path:"/Events/Full-Marathons",render:function(){return o.a.createElement(Ke,e)}}),o.a.createElement(R.b,{exact:!0,path:"/Events/10km-Marathons",render:function(){return o.a.createElement(Ye,e)}}),o.a.createElement(R.b,{exact:!0,path:"/Events/5km-Marathons",render:function(){return o.a.createElement(qe,e)}}))))})),rt=n(137),ot=n.n(rt);var ct=function(e){var t=e.myEvents,n=e.cleanThunk;return o.a.createElement("div",{className:ot.a.event},o.a.createElement("h2",null,"My Events:"),t.map((function(e){return o.a.createElement("li",null,[e]," ")})),0===t.length?null:o.a.createElement("button",{onClick:function(){return n()}},"Clean"))};var ut=Object(v.b)((function(e){return{myEvents:e.eventPage.myEvents,eventData:e.eventPage.eventData}}),{cleanThunk:function(){return function(e){e(Xe.clean())}}})((function(e){return o.a.createElement(ct,{myEvents:e.myEvents,cleanThunk:e.cleanThunk})})),st=n(21),lt=n.n(st);function it(){return o.a.createElement("div",{className:lt.a.search},o.a.createElement("div",{className:lt.a.menu},o.a.createElement(d.b,{to:"/Events",activeClassName:lt.a.active},"Events "),o.a.createElement(d.b,{to:"/Users",activeClassName:lt.a.active},"People"),o.a.createElement(d.b,{to:"/News",activeClassName:lt.a.active},"News"),o.a.createElement(d.b,{to:"/Search",activeClassName:lt.a.active},"Search"),o.a.createElement(d.b,{to:"/Store",activeClassName:lt.a.active},"Store")))}var pt=function(e){var t=e.isAuth,n=e.login,a=e.singOutThunk;return o.a.createElement("div",{className:lt.a.header},o.a.createElement("div",{className:lt.a.headerText},"iRunner"),o.a.createElement(it,null),t?o.a.createElement("div",{className:lt.a.login},o.a.createElement("div",null,o.a.createElement("div",null),n),o.a.createElement("button",{onClick:function(){a(null,null,null)}},"logout")):o.a.createElement(d.b,{to:"/login"},o.a.createElement("div",{className:lt.a.login},"Login")))},ft=function(){return w.get("auth/me").then((function(e){return e.data}))},mt=function(e,t,n){return w.post("/auth/login",{email:e,password:t,captcha:n}).then((function(e){return e.data}))},dt=function(){return w.delete("/auth/login").then((function(e){return e}))},vt=function(){return w.get("security/get-captcha-url")},ht=function(e,t,n,a){return{type:"SET_USER_DATA",data:{userID:e,email:t,login:n,isAuth:a}}},Et=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},gt={userID:null,email:null,login:null,isAuth:!1,captchaUrl:null},bt=function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft();case 2:(n=e.sent).resultCode===a.Success&&t(ht(n.data.id,n.data.email,n.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ot=function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dt();case 2:e.sent.data.resultCode===a.Success&&t(ht(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},wt=function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vt();case 2:n=e.sent,a=n.data.url,t(Et(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(b.a)(Object(b.a)({},e),t.data);case"GET_CAPTCHA_URL_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}};var jt=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{singOutThunk:Ot})((function(e){return o.a.createElement(pt,e)})),Pt=Object(Te.a)(40);var yt=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return o.a.createElement("form",{onSubmit:t},Object(ve.a)("Email","Email",[Te.b,Pt],"Input"),Object(ve.a)("Password","Password",[Te.b,Pt],"Input",{type:"password"}),Object(ve.a)(void 0,"rememberMe",[],"Input",{type:"checkbox"},"remember me"),n&&o.a.createElement("div",{className:ge.a.summaryError},n),a&&o.a.createElement("img",{src:a}),a&&Object(ve.a)("Symbols from img","captcha",[Te.b],"input"),o.a.createElement("div",null,o.a.createElement("button",null,"login")))}));var St=Object(X.d)(Object(v.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{singInThunk:function(e,t,n){return function(){var r=Object(g.a)(E.a.mark((function r(o){var c,u;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,mt(e,t,n);case 2:(c=r.sent).resultCode===a.Success?o(bt()):(c.resultCode===a.CaptchaIsRequired&&o(wt()),u=c.messages.length>0?c.messages[0]:"Some error",o(Object(_.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},singOutThunk:Ot}))((function(e){return e.isAuth?o.a.createElement(R.a,{to:"/Profile"}):o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement(yt,{onSubmit:function(t){e.singInThunk(t.Email,t.Password,t.captcha,t.rememberMe)},captchaUrl:e.captchaUrl}))})),xt={initialized:!1},kt=function(){return{type:"INITIALIZED_SUCCESS"}},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},Ct=n(126),Tt={newsData:[{title:"News will be here"}]},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt;arguments.length>1&&arguments[1];return e},Nt=n(138),At=n(128),Ut=Object(X.c)({postPage:ke,dialogPage:Ct.b,eventPage:et,usersPage:K,myProfilePage:N,newsPage:It,auth:_t,form:At.a,app:Dt}),Lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,Ft=Object(X.e)(Ut,Lt(Object(X.a)(Nt.a)));var Mt,Rt=function(){return o.a.createElement("div",null,"Will be soon...or not...")},Ht=o.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),Gt=(Mt=Ht,function(e){return o.a.createElement(r.Suspense,{fallback:o.a.createElement(te,null)},o.a.createElement(Mt,e))}),zt=function(e){Object(i.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert(e.reason)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"wrapper"},o.a.createElement(jt,null),o.a.createElement(U,null),o.a.createElement(M,null),o.a.createElement("div",{className:"wrapper-content"},o.a.createElement(R.d,null,o.a.createElement(R.a,{exact:!0,from:"/",to:"/Profile"}),o.a.createElement(R.b,{exact:!0,path:"/Profile/:userID?",render:function(){return o.a.createElement(Re,null)}}),o.a.createElement(R.b,{path:"/Events",render:function(){return o.a.createElement(at,null)}}),o.a.createElement(R.b,{exact:!0,path:"/Dialogs",render:function(){return o.a.createElement(Gt,null)}}),o.a.createElement(R.b,{exact:!0,path:"/Posts",render:function(){return o.a.createElement(Le,null)}}),o.a.createElement(R.b,{exact:!0,path:"/Users",render:function(){return o.a.createElement(fe,null)}}),o.a.createElement(R.b,{exact:!0,path:"/News",render:function(){return o.a.createElement(Je,null)}}),o.a.createElement(R.b,{exact:!0,path:"/Login",render:function(){return o.a.createElement(St,null)}}),o.a.createElement(R.b,{exact:!0,path:"/Store",render:function(){return o.a.createElement(Rt,null)}}),o.a.createElement(R.b,{exact:!0,path:"*",render:function(){return o.a.createElement("h1",null,"Error 404 ")}}))),o.a.createElement(ut,null)):o.a.createElement(te,null)}}]),n}(o.a.Component),Jt=Object(X.d)(R.g,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(bt());case 2:return e.next=4,t(kt());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(zt),Vt=function(){return o.a.createElement(d.a,null,o.a.createElement(v.a,{store:Ft},o.a.createElement(Jt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(Vt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={users:"Users_users__1pB6I",border:"Users_border__2s6YD",pageNumber:"Users_pageNumber__2HAxu",selected:"Users_selected__5u5h6"}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},41:function(e,t,n){e.exports={formControl:"FormsControls_formControl__Q3JxI",error:"FormsControls_error__ZNhiI",summaryError:"FormsControls_summaryError__2rnlI"}},55:function(e,t,n){e.exports={avatarPhoto:"UserProfile_avatarPhoto__2QmFS",contacts:"UserProfile_contacts__36C1d"}},59:function(e,t,n){e.exports={profile:"Profile_profile__SH6dT",active:"Profile_active__ws1tZ"}},94:function(e,t,n){e.exports={post:"PostItem_post__DO6EV"}}},[[164,1,2]]]);
//# sourceMappingURL=main.35edc204.chunk.js.map