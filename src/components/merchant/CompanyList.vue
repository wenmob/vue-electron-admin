<style>
   @import url('../../style/index');
   .dp1 span{
     display: inline-block;
     word-wrap:break-word;
     word-break:break-all;
   }
</style>
<template>
   <div class="app-main">
      <el-form :inline="true" :model="form" class="">
        <el-form-item label="商户名称">
         <el-input v-model="form.name" clearable placeholder="请输入商户名称"></el-input>
        </el-form-item>
        <el-form-item label="上级商户">
         <el-input v-model="form.pname" clearable placeholder="请输入上级商户"></el-input>
        </el-form-item>
        <!-- <el-form-item label="状态">
          <el-select v-model="form.region" placeholder="状态">
           <el-option label="正常" value="1"></el-option>
           <el-option label="禁用" value="2"></el-option>
           <el-option label="欠费" value="3"></el-option>
         </el-select>
        </el-form-item> -->
        <el-form-item>
         <el-button type="primary" @click="onSubmit">查询</el-button>
         <el-button type="primary" @click="save">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
       :data="tableData"
        v-loading="loading"
        border
        style="width: 100%">
       <el-table-column
         prop="id"
         label="计费编号"
         align="center"
         width="80">
       </el-table-column>
       <el-table-column
         prop="name"
         label="商户名称"
         align="center">
       </el-table-column>
       <el-table-column
         prop="parentName"
         label="上级商户"
         align="center">
       </el-table-column>
       <el-table-column
         prop="rate"
         align="center"
         label="费率(%)">
       </el-table-column>
       <el-table-column
         prop="balance"
         align="center"
         label="可用余额">
       </el-table-column>
       <el-table-column
         prop="arrearsStr"
         align="center"
         label="运转状况"
         >
       </el-table-column>
       <el-table-column
         prop="statusStr"
         align="center"
         label="状态"
         >
       </el-table-column>
       <el-table-column
         prop="createTime"
         align="center"
         label="创建时间"
         width="160"
         >
       </el-table-column>
       <el-table-column
         align="center"
         label="是否禁用"
         >
         <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="setting(scope.row)">
            </el-switch>
         </template>  
       </el-table-column>
       <el-table-column
         label="操作"
         align="center"
         width="180">
        <template slot-scope="scope">
         <el-button @click="handleSee(scope.row)" type="text" size="small">查看</el-button>
         <el-button @click="handleModify(scope.row)" type="text" style="color:#F56C6C" size="small">修改</el-button>
         <el-button @click="handleRe(scope.row)" type="text" style="color:#909399" size="small">重置</el-button>
         <el-button @click="handleAS(scope.row)" type="text" style="color:#E6A23C" size="small">加减</el-button>
        </template>
       </el-table-column>
      </el-table>
      <div class="block" style="margin-top: 30px;" align="center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange($event)"
          :current-page.sync="pagination.currentPage"
          :page-sizes="pagination.page_sizes"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.totalPage">
        </el-pagination>
      </div>
      <!--查看详情的界面-->
      <el-dialog 
        title="查看详情" 
        :visible.sync="dialogVisible1"
        close-on-press-escape
         width="360px">
        <p class="dp1"><span>计费编号：</span><span>{{detail.id}}</span></p>
        <p class="dp1"><span>商户名称：</span><span>{{detail.name}}</span></p>
        <p class="dp1"><span>费率：</span><span>{{detail.rate}}</span></p>
        <p class="dp1"><span>可用余额：</span><span>{{detail.balance}}</span></p>
        <p class="dp1"><span>运转状况：</span><span>{{detail.arrearsStr}}</span></p>
        <p class="dp1"><span>状态：</span><span>{{detail.statusStr}}</span></p>
        <p class="dp1"><span>秘钥：</span><span>{{detail.privateKey}}</span></p>
        <div slot="footer" class="dialog-footer">
         <!-- <el-button @click.native="dialogVisible1 = false">取消</el-button> -->
        </div>
      </el-dialog>
      <!--添加/修改的功能-->
      <el-dialog 
        :title="addCase==0? '添加商户':'修改商户'" 
        :visible.sync="dialogVisible2"
        close-on-press-escape
        :before-close="dialogSave"
         width="360px">
         <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="80px" >
          <el-form-item label="账号" prop="mobile">
           <el-input type="text" v-model="ruleForm1.mobile" placeholder="请输入用户名" clearable auto-complete="off"></el-input>
          </el-form-item>   
          <el-form-item label="密码" prop="password" >
           <el-input type="password" v-model="ruleForm1.password" placeholder="请输入密码" clearable auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户名称" prop="name">
           <el-input type="text" v-model="ruleForm1.name" placeholder="请输入商户名称" clearable auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="费率" prop="rate">
            <el-col :span="20">
             <el-input type="text" v-model="ruleForm1.rate" placeholder="请输入费率" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" clearable auto-complete="off"></el-input>
            </el-col>
            <el-col :span="2" >
              <el-tag type="info" style="border-style:none;font-size:15px;">%</el-tag>
            </el-col>  
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
            <el-button @click="resetForm('ruleForm1')">重置</el-button>
          </el-form-item>
         </el-form>
        <div slot="footer" class="dialog-footer">
         <!-- <el-button @click.native="clickCancel">取消</el-button> -->
        </div>
      </el-dialog>
      <!--加减的功能-->
      <el-dialog 
        title="加减款" 
        :visible.sync="dialogVisible3"
        close-on-press-escape
        :before-close="dialogSave2"
        width="360px">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" >
          <el-form-item label="">
              <el-tag type="danger">注：负数代表减少，正数代表添加</el-tag>
          </el-form-item> 
          <el-form-item label="加减款" prop="occurAmount">
              <el-input type="number" v-model="ruleForm2.occurAmount" placeholder="请输入金额" clearable auto-complete="off"></el-input>
          </el-form-item>   
          <el-form-item label="备注" prop="desc">
              <el-input type="textarea" v-model="ruleForm2.desc" clearable auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm2('ruleForm2')">提交</el-button>
            <el-button @click="resetForm2('ruleForm2')">重置</el-button>
          </el-form-item>
         </el-form>
        <div slot="footer" class="dialog-footer">
         <!-- <el-button @click.native="dialogVisible3 = false">取消</el-button> -->
        </div>
      </el-dialog>
   </div>
</template>
<script>
import APIS from '../../utils/apis'
let vm;
export default {
  data(){
      var checkP = (rule, value, callback) => {
         if (!value && this.addCase == 0) {
          return callback(new Error('密码不能为空'));
         }else{
            callback();
         }
      }
      return {
        form: {
          name: "",
          pname: ""
        },
        ruleForm1: {
          id: null,
          mobile: '',
          password: '',
          name: '',
          rate: ''
        },
        ruleForm2: {
          id: '',
          desc: '',
          occurAmount: ''
        },
        rules1: {
          mobile: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { validator: checkP, trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入商户名称', trigger: 'blur' }
          ],
          rate: [
            { required: true, message: '请输入费率', trigger: 'blur' }
          ]
        },
        rules2: {
          occurAmount: [
            { required: true, message: '请输入金额', trigger: 'blur' }
          ]

        },
        tableData:[],
        pagination: {
           pageSize: 10,
           page_sizes: [10,20,30,50],
           currentPage: 1,
           totalPage: 0
        },
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        detail: {},//详情的内容
        addCase: 0, //0代表的是添加，1代表的是修改
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
     //获取数据
     getTableDatas() {
       vm.loading = true;
        APIS.getMerchantDatas(vm.pagination.currentPage,vm.pagination.pageSize,vm.form.name,vm.form.pname).then(res => {
            if(res.code == 0){
              vm.pagination.totalPage = res.data.total;
              let data = res.data.rows;
              data.forEach(ele => {
                 if(ele.status == 2){
                    ele.value = false
                 }else{
                    ele.value = true
                 }
              })
              vm.tableData = data;
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
     //查询
     onSubmit() {
       vm.pagination.currentPage = 1;
       vm.getTableDatas();
     },
     //添加
     save() {
        vm.addCase = 0;
        vm.dialogVisible2 = true;
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
        if(val == vm.pagination.currentPage){
          return;
        }
        vm.pagination.currentPage = val;
        vm.getTableDatas();
     },
     //改变状态的效果
     setting(obj) {
        console.log(obj);
        let companyId = obj.id;
        let status;
        if(obj.status == 2){
          status = 1;
        }else{
          status = 2;
        }
        APIS.changeStatus(companyId,status).then(res => {
           if(res.code == 0){
             if(status == 1){
                obj.statusStr = "正常";
                obj.status = 1;
             }else{
                obj.statusStr = "禁止";
                obj.status = 2;
             }
              
           }
        })
     },
     //查看详情
     handleSee(obj) {
       APIS.viewCompanyDetail(obj.id).then(res => {
          console.log(res);
          if(res.code){
            vm.detail = res.data;
          }
          vm.dialogVisible1 = true
       })
     },
     //操作的重置功能
     handleRe(obj){
       this.$confirm('确定要重置秘钥吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           APIS.resetKeys(obj.id).then(res => {
             if(res.code){
               vm.$message({
                 message: '操作成功',
                 type: 'success'
               });
             }else{
              vm.$message({
                message: res.msg,
                type: 'warning'
              });
             }  
            }).catch(err => {
             vm.$message.error('出现了错误，请稍后重试');
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });          
        });   
     },
     //加减的功能
     handleAS(obj) {
        vm.ruleForm2 = {
          id: obj.id,
          occurAmount: '',
          desc: ''
        }
        vm.dialogVisible3 = true;
     },
     //点击修改的功能
     handleModify(obj) {
       vm.ruleForm1 = {
          id: obj.id,
          mobile: obj.mobile,
          password: '',
          name: obj.name,
          rate: obj.rate
       };
       vm.addCase = 1;
       vm.dialogVisible2 = true;
     },
     //添加修改的功能
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            APIS.saveSubCompany(vm.ruleForm1.id,vm.ruleForm1.mobile,vm.ruleForm1.password,vm.ruleForm1.name,vm.ruleForm1.rate).then(res => {
              if(res.code == 0){
                 vm.$message({
                    message: '操作成功',
                    type: 'success',
                    onClose: function() {
                       vm.resetForm('ruleForm1');
                       if(vm.addCase == 0){
                         vm.pagination.currentPage = 1;
                         vm.getTableDatas();
                         vm.dialogVisible2 = false;
                       }else{
                         vm.getTableDatas();
                         vm.dialogVisible2 = false;
                       }
                       
                    }
                 });
              }else{
                vm.$message({
                  message: res.msg,
                  type: 'warning'
                });
              }
              
            }).catch(err => {
               vm.$message.error('出错了，请稍后尝试');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //加减的弹出框
      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            APIS.updateCompanyBalance(vm.ruleForm2.id,vm.ruleForm2.desc,vm.ruleForm2.occurAmount).then(res => {
                  if(res.code == 0) {
                     vm.$message({
                       message: '加减款操作成功',
                       type: 'success',
                       onClose: function() {
                          vm.resetForm2('ruleForm2');
                          vm.getTableDatas();
                          vm.dialogVisible3 = false;
                       }
                    });
                  }else{
                    vm.$message({
                      message: res.msg,
                      type: 'warning'
                     });
                  }
    
            }).catch(err => {
              vm.$message.error('出错了，请稍后尝试');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm2(formName) {
        this.$refs[formName].resetFields();
      },
      //添加/修改打开时的回调
      dialogSave(done) {
        vm.resetForm('ruleForm1');
        done();
      },
      //加减的回调
      dialogSave2(done) {
        vm.resetForm2('ruleForm2');
        done();
      }
  }
}
</script>


