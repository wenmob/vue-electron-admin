webpackJsonp([2],{h8xZ:function(e,a){},rc0Y:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("TRXr"),l=void 0,r={data:function(){return{form:{companyId:"",startTime:"",endTime:""},tableData:void 0,pagination:{pageSize:10,page_sizes:[10,20,30,50],currentPage:1,totalPage:10},loading:!0}},beforeDestroy:function(){l=void 0},mounted:function(){(l=this).getTableDatas()},methods:{onSubmit:function(){l.pagination.currentPage=1,l.getTableDatas()},getTableDatas:function(){l.loading=!0,n.a.getTradeRecord(l.form.companyId,l.pagination.currentPage,l.pagination.pageSize,l.form.startTime,l.form.endTime).then(function(e){0==e.code?(l.pagination.totalPage=e.data.total,l.tableData=e.data.rows):l.$message({message:e.msg,type:"warning"}),l.loading=!1}).catch(function(e){l.$message.error("发生错误")})},handleSizeChange:function(e){l.pagination.pageSize=e,l.pagination.currentPage=1,l.getTableDatas()},handleCurrentChange:function(e){e!=l.pagination.currentPage&&(l.pagination.currentPage=e,l.getTableDatas())}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-main"},[t("el-form",{attrs:{inline:!0,model:e.form}},[t("el-form-item",{attrs:{label:"计费编号"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入计费编号"},model:{value:e.form.companyId,callback:function(a){e.$set(e.form,"companyId",a)},expression:"form.companyId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.form.startTime,callback:function(a){e.$set(e.form,"startTime",a)},expression:"form.startTime"}})],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.form.endTime,callback:function(a){e.$set(e.form,"endTime",a)},expression:"form.endTime"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"companyId",label:"计费编号",align:"center",width:"80"}}),e._v(" "),t("el-table-column",{attrs:{prop:"companyName",label:"商户名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"amount",label:"金额",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tradeTypeStr",label:"类型",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",label:"备注",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"时间",align:"center",width:"160"}})],1),e._v(" "),t("div",{staticClass:"block",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[t("el-pagination",{attrs:{"current-page":e.pagination.currentPage,"page-sizes":e.pagination.page_sizes,"page-size":e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var o=t("VU/8")(r,i,!1,function(e){t("h8xZ")},null,null);a.default=o.exports}});
//# sourceMappingURL=2.1861cab6718f83e56183.js.map