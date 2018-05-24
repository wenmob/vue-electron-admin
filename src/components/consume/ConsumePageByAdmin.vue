<style>
   @import url('../../style/index');
</style>
<template>
   <div class="app-main" style="">
      <el-form :inline="true" :model="form">
        <el-form-item label="计费编号">
         <el-input v-model="form.companyId" clearable placeholder="请输入计费编号"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker
             v-model="form.startTime"
             type="datetime"
             placeholder="选择日期时间"
             value-format="yyyy-MM-dd HH:mm:ss"
             style="width: 100%;">
            </el-date-picker>
          </el-col> 
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
             v-model="form.endTime"
             type="datetime"
             placeholder="选择日期时间"
             value-format="yyyy-MM-dd HH:mm:ss"
             style="width: 100%;">
             </el-date-picker>
          </el-col>  
        </el-form-item>
        <el-form-item>
         <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表格的内容-->
      <el-table
       :data="tableData"
        border
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          prop="companyId"
          label="计费编号"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          prop="acountId"
          label="资金账号"
          align="center">
        </el-table-column>
        <el-table-column
          label="股票"
          align="center"
          width="100">
          <template slot-scope="scope">
            <p>{{scope.row.stockName}}</p>
            <p>{{scope.row.stockCode}}</p>
          </template>  
        </el-table-column>
        <el-table-column
          prop="PA"
          label="成本价/成交均价"
          align="center">
        </el-table-column>
        <el-table-column
          prop="NC"
          label="成交数量/总成本"
          align="center">
        </el-table-column>
        <el-table-column
          label="手续费"
          align="center"
          width="160">
          <template slot-scope="scope">
             <p style="text-align:left">印花税：{{scope.row.stamptax}}</p>
             <p style="text-align:left">佣金：{{scope.row.commission}}</p>
             <p style="text-align:left">过户结算费：{{scope.row.transferFees}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="rate"
          label="服务费率(%)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="consumeAmount"
          label="服务费"
          align="center">
        </el-table-column>
        <el-table-column
          prop="dateUpdate"
          label="交易时间"
          align="center"
          width="160">
        </el-table-column>
      </el-table> 
      <div class="block" align="center" style="margin-top: 30px;">
       <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.page_sizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.totalPage">
       </el-pagination>
      </div> 
   </div>
</template>
<script>
import APIS from '../../utils/apis'
let vm;
export default {
  data(){
      return {
         form: {
            companyId: '',
            startTime: '',
            endTime: ''
         },
         tableData:undefined,
         pagination: {
           pageSize: 10,
           page_sizes: [10,20,30,50],
           currentPage: 1,
           totalPage: 10
         },
         loading: true
      }
  },
  beforeDestroy() {
    vm = undefined;
  },
  mounted() {
     vm = this;
     vm.getTableDatas();
  },
  methods: {
    //点击查询的功能
     onSubmit() {
       vm.pagination.currentPage = 1;
       vm.getTableDatas();
       
     },
     //表格的数据内容
     getTableDatas() {
       vm.loading = true; 
        APIS.consumeList(vm.form.companyId, vm.pagination.currentPage, vm.pagination.pageSize, vm.form.startTime, vm.form.endTime).then(res => {
           if(res.code == 0) {
              vm.pagination.totalPage = res.data.total;
              let arr = res.data.rows;
              arr.forEach(element => {
                 element.stockStr = element.stockName + "-" + element.stockCode;
                 element.PA = element.priceCost+ " / " + element.averagePrice;
                 element.NC = element.numberDone + " / " + element.costTotle;
              })  
              vm.tableData = arr;
           }else{
             vm.$message({
               message: res.msg,
               type: 'warning'
             });
           }
           vm.loading = false;
        }).catch(err => {
           vm.$message.error('发生错误');
        })
     },
     //分页
     handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        vm.pagination.pageSize = val;
        vm.pagination.currentPage = 1;
        vm.getTableDatas();
      },
      //分页
     handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        if(val == vm.pagination.currentPage){
          return;
        }
        vm.pagination.currentPage = val;
        vm.getTableDatas();
     }

  }
}
</script>


