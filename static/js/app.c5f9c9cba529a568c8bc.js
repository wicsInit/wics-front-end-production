webpackJsonp([4],[,function(t,e,n){"use strict";e.a={card:"wics-card",cards:"wics-cards",alert:"wics-alert",blockquote:"wics-blockquote",list:"wics-list",listTile:"wics-list-tile",listGroup:"wics-list-group",navDrawer:"wics-nav-drawer",toolbar:"wics-toolbar",footer:"wics-footer",carousel:"wics-carousel"}},,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(4),o=n(2),a=n(29);i.a.use(o.b);var r=new o.b.Store({state:{drawer:{clipped:!1,model:!1,items:[{icon:"home",title:"Home",to:"/"},{icon:"event",title:"Events",to:"/events"},{icon:"work",title:"Executives",to:"/exec"},{icon:"perm_contact_calendar",title:"Contact",to:"/contact"}],miniVariant:!1,right:!0,rightDrawer:!1},footer:{fixed:!1},page:null},mutations:{setPage:function(t,e){t.page=e}},actions:{getPageData:function(t,e){var n=t.commit,i=(t.state,a.a.find(function(t){return t.path.toUpperCase()===e.path.toUpperCase()}));console.log(i),i&&n("setPage",i)}},getters:{drawer:function(t){return t.drawer},footer:function(t){return t.footer},title:function(t){return t.title},name:function(t){return t.name},page:function(t){return t.page}}})},,,,,,,function(t,e,n){var i=n(0)(n(35),n(80),null,null,null);t.exports=i.exports},function(t,e,n){"use strict";var i=n(4),o=n(82),a=n(31);i.a.use(o.a);var r=function(t){n.e(1).then(function(){t(n(27))}.bind(null,n)).catch(n.oe)},s=function(t){n.e(0).then(function(){t(n(25))}.bind(null,n)).catch(n.oe)},c=function(t){n.e(0).then(function(){t(n(28))}.bind(null,n)).catch(n.oe)},l=function(t){n.e(2).then(function(){t(n(26))}.bind(null,n)).catch(n.oe)};e.a=new o.a({routes:[{path:"/",name:"Home",component:r},{path:"/admin",name:"admin",component:s,children:[{path:"",name:"adminLanding",beforeEnter:a.a},{path:"console",name:"adminConsole",beforeEnter:a.a,component:l},{path:"login",name:"adminLogin",component:c}]}],mode:"history"})},function(t,e){},function(t,e,n){function i(t){n(69)}var o=n(0)(n(32),n(78),i,null,null);t.exports=o.exports},,,function(t,e,n){var i=n(0)(n(33),n(77),null,null,null);t.exports=i.exports},,,,,function(t,e,n){"use strict";var i=n(1);e.a=[{path:"/",title:"WiCS - Ryerson",name:"home",cards:[{body:{title:"RYERSON WOMEN IN COMPUTER SCIENCE",components:[{tag:i.a.blockquote,data:{text:"WiCS is a student group run by undergraduate Computer Science students at Ryerson University."}}],flex:"md6"},actions:[{hint:"View our facebook page",icon:"fa-facebook",href:"https://www.facebook.com/ryersonwics?fref=ts"},{hint:"Email us",icon:"fa-envelope",href:"email://wics@ryerson.ca"},{hint:"Join our mailing list",icon:"fa-sign-in",href:""}]},{body:{title:"Who we are",components:[{tag:i.a.blockquote,data:{text:"Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.",color:"white--text"}}],backgroundColor:"primary",color:"white--text"}},{body:{title:"Our goals",components:[{tag:i.a.blockquote,data:{text:"Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field.",color:"white--text"}}],backgroundColor:"secondary",color:"white--text",flex:"md6"}},{body:{title:"Upcoming Events for Fall 2017",flex:"md6",components:[{tag:i.a.list,data:[{active:!1,expand:!0,title:"Meet and Greet",time:"Mid September",color:"#7d7abc",description:"Meet and Greet is an opportunity to meet and get to know the WiCS team, and our plans for the school year. Also a chance to network and get to know their fellow Computer Science students."},{active:!1,expand:!0,title:"Cookie and Cram Night",time:"Late September",color:"#7d7abc",description:"Cookies and Cram Night is an event that gives students the opportunity to connect with one another while preparing for exams.  There will be students of different years which gives all participants a chance to get assistance on any concepts they need clarification on and assignments they need help with. This event allows the students to get to know one another and encourage each other through the Computer Science program."},{active:!1,expand:!0,title:"Technical Mock Interview",time:"Last week of October to First week of November",color:"#7d7abc",description:"In the Technology field, having strong technical skills is as essential as being able to apply them in the workplace. Technical interviews allow students to apply their knowledge and show their skills although not all students are fully prepared for the questions that will be asked. Technical Mock Interviews aims to provide students with the opportunity to experience a technical interview and get extra practice so that they can be their best when the real interview comes along. Students will be asked technical questions based on programming languages they are experienced in and given feedback on areas of improvement. We want to improve student’s interview skills so that they will feel motivated and excel in job interviews."}]},{tag:i.a.alert,data:{type:"info",alert:"Dates for the events will be finalized as they approach"}}]}}]},{path:"/contacts",title:"",name:"contacts",cards:[]}]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),o=n(22),a=n.n(o),r=n(21),s=n.n(r),c=n(19),l=n(11),u=n(20);n.n(u);i.a.use(a.a),i.a.config.productionTip=!1,c.a.beforeEach(function(t,e,n){l.a.dispatch("getPageData",t),n()}),new i.a({el:"#app",router:c.a,store:l.a,render:function(t){return t(s.a)}})},function(t,e,n){"use strict";var i=n(11);e.a=function(t,e,n){n(i.a.getters.admin?"/admin/console":"/admin/login")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(72),o=n.n(i),a=n(74),r=n.n(a),s=n(73),c=n.n(s);e.default={components:{"wics-nav-drawer":o.a,"wics-toolbar":r.a,"wics-footer":c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(5),a=n.n(o),r=n(71),s=n.n(r),c=n(18),l=n.n(c),u=n(1);e.default={props:{data:{type:[Array]}},components:(i={},a()(i,u.a.listGroup,s.a),a()(i,u.a.listTile,l.a),i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),o=n.n(i),a=n(18),r=n.n(a),s=n(1);e.default={props:{tile:{type:[Object]}},computed:{expandable:function(){return console.log(this.tile.items||this.tile.expandable),this.tile.items||this.tile.expandable}},components:o()({},s.a.listTile,r.a)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tile:{type:[Object]}},computed:{tileColor:function(){return this.tile.color?{color:this.tile.color}:{color:"black"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),o=n.n(i),a=n(6),r=n.n(a),s=n(24),c=n.n(s),l=n(2),u=n(1);e.default={computed:r()({},n.i(l.a)(["drawer"])),components:o()({},u.a.list,c.a)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),o=n.n(i),a=n(2);e.default={computed:o()({},n.i(a.a)(["page","footer"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),o=n.n(i),a=n(2);e.default={computed:o()({},n.i(a.a)(["drawer"]))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i=n(0)(n(34),n(81),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(68)}var o=n(0)(n(36),n(75),i,"data-v-00da2fad",null);t.exports=o.exports},function(t,e,n){var i=n(0)(n(37),n(76),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(70)}var o=n(0)(n(38),n(79),i,"data-v-65c0fb25",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{persistent:"",temporary:"","mini-variant":t.drawer.miniVariant,clipped:t.drawer.clipped},model:{value:t.drawer.model,callback:function(e){t.drawer.model=e},expression:"drawer.model"}},[n("v-toolbar",{staticClass:"transparent",attrs:{flat:"",dense:""}},[n("v-list",{staticClass:"pa-0",attrs:{dense:""}},[n("v-list-tile",{attrs:{avatar:""},on:{click:function(e){e.stopPropagation(),t.drawer.miniVariant=!t.drawer.miniVariant}}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"/static/images/wics-logo.png"}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("WiCS")])],1),t._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("wics-list",{staticClass:"pa-0",attrs:{data:t.drawer.items,value:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{fixed:t.footer.fixed}},[n("span",[t._v(t._s(t.page.name)+" 2017")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("v-list",[t._l(t.data,function(e,i){return e.items||e.expand?n("v-list-group",{key:i,attrs:{value:e.active,tile:e}},[n("wics-list-tile",{attrs:{tile:e},slot:"item"}),t._v(" "),n("blockquote",{staticClass:"my-2"},[n("h6",{staticClass:"black--text"},[t._v(t._s(e.time))]),t._v(" "),n("p",[t._v(t._s(e.description))])])],1):t._e()}),t._v(" "),t._l(t.data,function(e,i){return e.items||e.expand?t._e():n("wics-list-tile",{key:i,attrs:{tile:e}})})],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("wics-nav-drawer"),t._v(" "),n("wics-toolbar"),t._v(" "),n("main",{staticStyle:{"padding-top":"0px"}},[n("router-view")],1),t._v(" "),n("wics-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{"background-color":"rgba(20, 20, 20, 0.3)"},attrs:{fixed:"",dense:"",style:"background-color: rgba(20, 20, 20, 0.3);"}},["permanent"!==t.drawer.type?n("v-toolbar-side-icon",{attrs:{light:""},on:{click:function(e){e.stopPropagation(),t.drawer.model=!t.drawer.model}}}):t._e(),t._v(" "),n("v-spacer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",[t.tile.icon?n("v-list-tile-action",[n("v-icon",{style:[t.tileColor],attrs:{light:""}},[t._v(t._s(t.tile.icon))])],1):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{"overflow-y":"hidden"}},[n("h5",{staticStyle:{"margin-bottom":"0"},style:[t.tileColor]},[t._v(t._s(t.tile.title))])])],1),t._v(" "),t.tile.items||t.tile.expand?n("v-list-tile-action",[n("v-icon",[t._v("keyboard_arrow_down")])],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tile?n("v-list-group",{staticClass:"mb-2",attrs:{value:t.tile.active}},[n("wics-list-tile",{attrs:{tile:t.tile},slot:"item"}),t._v(" "),n("blockquote",{staticClass:"my-2"},[n("h6",{staticClass:"black--text"},[t._v(t._s(t.tile.time))]),t._v(" "),n("p",[t._v(t._s(t.tile.description))])])],1):t._e()},staticRenderFns:[]}}],[30]);
//# sourceMappingURL=app.c5f9c9cba529a568c8bc.js.map