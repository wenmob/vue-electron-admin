webpackJsonp([7],{"+aYM":function(e,t){},"/82w":function(e,t,a){"use strict";(function(e){var r=a("TRXr"),s=void 0;t.a={data:function(){var e=this;return{editableTabsValue:"/pargross/merchantDetail/companyList",tabIndex:1,ruleForm2:{oldPass:"",pass:"",checkPass:""},rules2:{oldPass:[{validator:function(e,t,a){""===t?a(new Error("请输入原密码")):a()},trigger:"blur"}],pass:[{validator:function(t,a,r){""===a?r(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{validator:function(t,a,r){""===a?r(new Error("请再次输入密码")):a!==e.ruleForm2.pass?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]},username:"",sides:this.asides,rightTags:[],dialogVisible:!1}},mounted:function(){s=this,r.a.checkLogin().then(function(e){0==e.code&&(s.username=e.data)}),s.beginShow()},methods:{beginShow:function(){s.sides[0].meta.canc=!0,e(".fac").eq(0).removeClass("fa fa-chevron-down"),e(".fac").eq(0).addClass("fa fa-chevron-up");var t={name:s.sides[0].children[0].name,pathFull:s.sides[0].children[0].meta.pathFull,self:!0};s.rightTags.push(t),s.$router.push({path:"/pargross/merchantDetail/companyList"})},exit:function(){r.a.signOut().then(function(e){0==e.code&&s.$message({message:e.msg,type:"success",duration:300,onClose:function(){s.$router.push({path:"/"})}})})},clickSide:function(t,a){if(e(t.target).find(".fa-chevron-down"))if(s.sides[a].meta.canc)s.sides[a].meta.canc=!1,e(".fac").eq(a).removeClass("fa fa-chevron-up"),e(".fac").eq(a).addClass("fa fa-chevron-down");else{s.sides[a].meta.canc=!0,e(".fac").eq(a).removeClass("fa fa-chevron-down"),e(".fac").eq(a).addClass("fa fa-chevron-up");for(var r=0;r<s.sides.length;r++)r!=a&&(s.sides[r].meta.canc=!1,e(".fac").eq(r).removeClass("fa fa-chevron-up"),e(".fac").eq(r).addClass("fa fa-chevron-down"))}else if(1==s.sides[a].meta.tag){var o={name:s.sides[a].name,pathFull:s.sides[a].meta.pathFull,self:!0};if(s.rightTags.find(function(e){return e.name==o.name})){for(var n=s.rightTags.findIndex(function(e){return e.name==o.name}),i=0;i<s.rightTags.length;i++)s.rightTags[i].self=!1;s.rightTags[n].self=!0}else{for(var l=0;l<s.rightTags.length;l++)s.rightTags[l].self=!1;s.rightTags.push(o)}s.$router.push({path:o.pathFull})}},clickSideA:function(e){if(1==e.meta.tag){var t={name:e.name,self:!0,pathFull:e.meta.pathFull},a=s.rightTags.find(function(e){return e.name==t.name});if(s.editableTabsValue=e.meta.pathFull,a){for(var r=s.rightTags.findIndex(function(e){return e.name==t.name}),o=0;o<s.rightTags.length;o++)s.rightTags[o].self=!1;s.rightTags[r].self=!0,s.$router.push({path:s.rightTags[r].pathFull})}else{for(var n=0;n<s.rightTags.length;n++)s.rightTags[n].self=!1;s.rightTags.push(t),s.$router.push({path:t.pathFull})}}},changePassword:function(){s.dialogVisible=!0},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.a.updatePassword(s.ruleForm2.oldPass,s.ruleForm2.pass).then(function(e){0==e.code?s.$message({message:"密码修改成功",type:"success",onClose:function(){s.resetForm("ruleForm2"),s.dialogVisible=!1}}):s.$message({message:e.msg,type:"warning"})}).catch(function(e){s.$message.error("出现错误，请稍后重试")})})},resetForm:function(e){this.$refs[e].resetFields()},dialogSave:function(e){s.resetForm("ruleForm2"),e()},removeTab:function(e){var t=this.rightTags,a=this.editableTabsValue;a===e&&t.forEach(function(r,o){if(r.pathFull===e){var n=t[o+1]||t[o-1];n&&(a=n.pathFull,s.$router.push({path:a}))}}),this.editableTabsValue=a,this.rightTags=t.filter(function(t){return t.pathFull!==e})},gotoPath:function(e){s.$router.push({path:e.name})}}}}).call(t,a("7t+N"))},"5W1q":function(e,t){},"A14/":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},s,!1,function(e){a("A14/")},null,null).exports,n=a("/ocq"),i=a("TRXr"),l=a("TIfe"),u=void 0,c={data:function(){return{ruleForm:{username:"",password:"",code:"",ncode:"2245"},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},uuid:"",uri:""}},mounted:function(){(u=this).listerEnter(),u.codeFun()},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;i.a.login(u.ruleForm.username,u.ruleForm.password,u.uuid,u.ruleForm.code).then(function(e){0==e.code?u.$router.push({path:"/pargross",query:{username:u.ruleForm.username}}):u.$message({message:e.msg,type:"warning",onClose:function(){u.codeFun()}})}).catch(function(e){u.$message({message:"出现错误，请稍后重试",type:"warning"})})})},resetForm:function(e){this.$refs[e].resetFields()},forget:function(){this.$router.push({path:"/updatePassword"})},signRe:function(){this.$router.push({path:"/register"})},uuidFun:function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var a=e.join("");u.uuid=a},listerEnter:function(){document.onkeydown=function(e){var t=e||window.event;t&&13==t.keyCode&&u.submitForm("ruleForm")}},codeFun:function(){u.uuidFun(),u.uri=l.a+"/user/code?uuid="+u.uuid}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cad-main",attrs:{id:"loginMain"}},[a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-dd",attrs:{align:"center"}},[a("h3",{staticClass:"login-dd-h1"},[e._v("计费系统")]),e._v(" "),a("p",{staticClass:"login-dd-p1"},[e._v("v1.0")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"login-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"66px"}},[a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"验证码",prop:"code"}},[a("el-input",{attrs:{type:"text"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:""}},[a("img",{staticStyle:{border:"1px solid #ccc"},attrs:{src:e.uri,width:"100%",height:"34"},on:{click:e.codeFun}})]),e._v(" "),a("el-form-item",[a("el-button",{staticStyle:{float:"right","margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)])])},staticRenderFns:[]};var m=a("VU/8")(c,d,!1,function(e){a("VSk/")},null,null).exports,f={data:function(){return{ruleForm:{username:"",password:"",code:"",ncode:"2245"},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},signIn:function(){this.$router.push({path:"/"})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cad-main",attrs:{id:"loginMain"}},[a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-dd",attrs:{align:"center"}},[a("h3",{staticClass:"login-dd-h1"},[e._v("计费系统")]),e._v(" "),a("p",{staticClass:"login-dd-p1"},[e._v("This is for the administrator")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"login-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"66px"}},[a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"新密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"验证码",prop:"code"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",e._n(t))},expression:"ruleForm.code"}})],1),e._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.ncode,callback:function(t){e.$set(e.ruleForm,"ncode",e._n(t))},expression:"ruleForm.ncode"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"login-foot"},[a("a",{staticClass:"login-foot-a",staticStyle:{float:"right",color:"#409EFF"},on:{click:e.signIn}},[e._v("前往登入>")])])],1)])])},staticRenderFns:[]};var h=a("VU/8")(f,p,!1,function(e){a("+aYM")},null,null).exports,g={data:function(){return{ruleForm:{username:"",password:"",code:"",ncode:"2245"},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},signIn:function(){this.$router.push({path:"/"})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cad-main",attrs:{id:"loginMain"}},[a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-dd",attrs:{align:"center"}},[a("h3",{staticClass:"login-dd-h1"},[e._v("计费系统")]),e._v(" "),a("p",{staticClass:"login-dd-p1"},[e._v("This is for the administrator")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"login-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"66px"}},[a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"验证码",prop:"code"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",e._n(t))},expression:"ruleForm.code"}})],1),e._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.ncode,callback:function(t){e.$set(e.ruleForm,"ncode",e._n(t))},expression:"ruleForm.ncode"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"login-foot"},[a("a",{staticClass:"login-foot-a",staticStyle:{float:"right",color:"#409EFF"},on:{click:e.signIn}},[e._v("前往登入>")])])],1)])])},staticRenderFns:[]};var b=a("VU/8")(g,v,!1,function(e){a("vbg6")},null,null).exports,F=a("/82w"),w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parg-main"},[a("el-container",{staticStyle:{width:"100%",height:"100%"}},[a("el-header",{staticStyle:{height:"46px"},attrs:{id:"parg-head"}},[a("div",{staticClass:"parg-h-d1"},[a("i",{staticClass:"fa fa-star-o bicon",attrs:{"aria-hidden":"true"}}),a("span",[e._v("计费系统")])]),e._v(" "),a("div",{staticClass:"parg-h-d2"},[a("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",[e._v("账号："+e._s(e.username))]),e._v(" "),a("a",{on:{click:e.exit}},[e._v("退出")]),e._v(" "),a("a",{on:{click:e.changePassword}},[e._v("修改密码")])])]),e._v(" "),a("el-container",[a("el-aside",{attrs:{width:"200px",id:"parg-left"}},[e._l(e.sides,function(t,r){return[a("div",{staticClass:"ss1",on:{click:function(t){e.clickSide(t,r)}}},[a("i",{class:t.meta.icon}),a("span",[e._v(e._s(t.name))]),t.children?a("i",{staticClass:"fa fa-chevron-down fac",staticStyle:{float:"right"}}):e._e(),a("div",{staticStyle:{clear:"both"}})]),e._v(" "),a("el-collapse-transition",[t.children?a("div",{directives:[{name:"show",rawName:"v-show",value:t.meta.canc,expression:"sds.meta.canc"}],staticClass:"sdiv"},e._l(t.children,function(t,r){return a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.meta.tag,expression:"sc.meta.tag == 1"}],staticClass:"ss2",style:e.editableTabsValue==t.meta.pathFull?"background-color:#409EFF":"",on:{click:function(a){e.clickSideA(t)}}},[a("i",{class:t.meta.icon,style:e.editableTabsValue==t.meta.pathFull?"color:#fff":""}),e._v(" "),a("span",{style:e.editableTabsValue==t.meta.pathFull?"color:#fff":""},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticStyle:{clear:"both"}})])})):e._e()])]})],2),e._v(" "),a("el-main",{attrs:{id:"parg-cont"}},[a("div",{staticClass:"parg-cont-d1"},[a("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":e.removeTab,"tab-click":e.gotoPath},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.rightTags,function(e,t){return a("el-tab-pane",{key:e.pathFull,attrs:{label:e.name,name:e.pathFull}})}))],1),e._v(" "),a("div",{staticClass:"app-main"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogVisible,"close-on-press-escape":"","before-close":e.dialogSave,width:"360px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"74px"}},[a("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[a("el-input",{attrs:{type:"password",clearable:"","auto-complete":"off"},model:{value:e.ruleForm2.oldPass,callback:function(t){e.$set(e.ruleForm2,"oldPass",t)},expression:"ruleForm2.oldPass"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"pass"}},[a("el-input",{attrs:{type:"password",clearable:"","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",clearable:"","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[]};var y=function(e){a("ijKW")},_=a("VU/8")(F.a,w,!1,y,null,null).exports,x=a("zL8q"),k=a.n(x);r.default.use(n.a);var T=new n.a({routes:[{path:"/",name:"login",component:m,meta:{requireAuth:!1}},{path:"/updatePassword",name:"updatePassword",component:h},{path:"/register",name:"register",component:b},{path:"/pargross",name:"pargross",component:_,meta:{requireAuth:!0},children:[{path:"merchantDetail",name:"商户详情",component:function(){return a.e(1).then(a.bind(null,"HJXp"))},meta:{icon:"fa fa-pinterest-p",canc:!1,tag:0,pathFull:"/pargross/merchantDetail",requireAuth:!0},children:[{path:"companyList",name:"商户列表",component:function(){return a.e(4).then(a.bind(null,"/Wcl"))},meta:{icon:"fa fa-list",tag:1,pathFull:"/pargross/merchantDetail/companyList",requireAuth:!0}},{path:"consumePageByAdmin",name:"服务费记录",component:function(){return a.e(3).then(a.bind(null,"0Z5i"))},meta:{icon:"fa fa-outdent",tag:1,pathFull:"/pargross/merchantDetail/consumePageByAdmin",requireAuth:!0}},{path:"rechargePageByAdmin",name:"充值记录查询",component:function(){return a.e(5).then(a.bind(null,"WSiV"))},meta:{icon:"fa fa-strikethrough",tag:1,pathFull:"/pargross/merchantDetail/rechargePageByAdmin",requireAuth:!0}},{path:"rebateList",name:"返佣记录",component:function(){return a.e(0).then(a.bind(null,"Z3fl"))},meta:{icon:"fa fa-file-pdf-o",tag:1,pathFull:"/pargross/merchantDetail/rebateList",requireAuth:!0}},{path:"tradeRecord",name:"加减款记录",component:function(){return a.e(2).then(a.bind(null,"rc0Y"))},meta:{icon:"fa fa-file-excel-o",tag:1,pathFull:"/pargross/merchantDetail/tradeRecord",requireAuth:!0}}]}]}]});T.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requireAuth})?i.a.checkLogin().then(function(e){if(0==e.code){var t=T.options.routes.findIndex(function(e){return"pargross"==e.name});r.default.prototype.asides=T.options.routes[t].children,a()}else x.MessageBox.alert("由于你长时间未操作，请重新进入",{confirmButtonText:"确定",callback:function(e){}})}).catch(function(e){console.log(error)}):a()});var C=T,$=(a("uMhA"),a("5W1q"),a("tvR6"),a("Vi3T")),q=a.n($);r.default.use(k.a,{locale:q.a,size:"medium"}),r.default.config.productionTip=!1,r.default.prototype.asides=[],new r.default({el:"#app",router:C,components:{App:o},template:"<App/>",render:function(e){return e(o)}})},TIfe:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a("lbHh"),s=(a.n(r),"http://admin.charge.xinlai8.com/charging")},TRXr:function(e,t,a){"use strict";var r=a("//Fk"),s=a.n(r),o=(a("7+uW"),a("mtWM")),n=a.n(o),i=(a("mw3O"),a("TIfe")),l=a("zL8q"),u=i.a,c=n.a.create({baseURL:u,timeout:15e3,withCredentials:!0});c.interceptors.request.use(function(e){return e.headers={"X-Requested-With":"XMLHttpRequest"},e},function(e){console.log(e),s.a.reject(e)}),c.interceptors.response.use(function(e){var t=e.data;if(1e5==t.code)l.MessageBox.alert("你还未登录或者重新登录",{confirmButtonText:"确定",callback:function(e){window.location.href="/"}});else if(100001==t.code)l.MessageBox.alert("登入超时，请重新登入",{confirmButtonText:"确定",callback:function(e){window.location.href="/"}});else{if(100002!=t.code)return e.data;l.MessageBox.alert("抱歉你无权操作",{confirmButtonText:"确定",callback:function(e){window.location.href="/"}})}return s.a.reject("error")},function(e){return l.Message.error(e),s.a.reject(e)});var d=c,m={login:function(e,t,a,r){return d({url:"/auth/adminLogin",method:"post",data:{mobile:e,password:t,uuid:a,picCode:r}})},checkLogin:function(){return d({url:"/user/userInfo",method:"get",data:""})},getCode:function(e){return d({url:"/user/code?uuid="+e,method:"get",data:{}})},signOut:function(){return d({url:"/auth/logout",method:"post",data:{}})},getMerchantDatas:function(e,t,a,r){return d({url:"/company/companyList",method:"post",data:{offset:e,limit:t,name:a,pname:r}})},viewCompanyDetail:function(e){return d({url:"/company/companyDetailByAdmin?companyId="+e,method:"get",data:{}})},changeStatus:function(e,t){return d({url:"/company/changeStatus",method:"post",data:{companyId:e,status:t}})},updatePassword:function(e,t){return d({url:"/user/updatePassword",method:"post",data:{oldPassword:e,password:t}})},saveSubCompany:function(e,t,a,r,s){return d({url:"/company/saveCompanyAdmin",method:"post",data:{id:e,mobile:t,password:a,name:r,rate:s}})},resetKeys:function(e){return d({url:"/company/resetKeys?companyId="+e,method:"get",data:{}})},updateCompanyBalance:function(e,t,a){return d({url:"/company/updateCompanyBalance",method:"post",data:{companyId:e,desc:t,occurAmount:a}})},consumeList:function(e,t,a,r,s){return d({url:"/consume/consumePageByAdmin",method:"post",data:{companyId:e,offset:t,limit:a,startTime:r,endTime:s}})},rechargeList:function(e,t,a,r,s){return d({url:"/recharge/rechargePageByAdmin",method:"post",data:{companyId:e,offset:t,limit:a,startTime:r,endTime:s}})},getRebateList:function(e,t,a,r,s){return d({url:"/profit/listByAdmin",method:"post",data:{companyId:e,offset:t,limit:a,startTime:r,endTime:s}})},getTradeRecord:function(e,t,a,r,s){return d({url:"/tradeRecord/listByAdmin",method:"post",data:{companyId:e,offset:t,limit:a,startTime:r,endTime:s}})}};t.a=m},"VSk/":function(e,t){},ijKW:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){},vbg6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.35c73028b5c1e5837a01.js.map