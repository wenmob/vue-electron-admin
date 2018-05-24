<style>
  @import url('../style/index');
  @import url('../style/transition');
  .parg-main{
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #D9DCE1;
  }
  #parg-head{
      background-color: #2C323E;
  }
  #parg-left{
      background-color: #fff;
  }
  #parg-cont{
     position: relative;
  }
  .parg-cont-d1{
      position: absolute;
      width: 100%;
      height: 43px;
      left: 0px;
      top: 0px;
      line-height: 43px;
      font-size: 14px;
      color: #6C6C6C;
      font-weight: 500;
      background-color: #E8ECEF;
  }
  .parg-cont-d1 span{
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
  }
  .bicon{
      color: #629DE3;
      font-size: 22px;
  }
  .parg-h-d1{
      float: left;
      height: 46px;
      width: 180px;
  }
  .parg-h-d1 i{
      float: left;
      font-size: 16px;
      margin-top: 14px;
  }
  .parg-h-d1 span{
      float: left;
      color: white;
      font-size: 15px;
      margin-left: 10px;
      margin-top: 13px;
    }
  .parg-h-d2 {
      float: right;
  }
  .parg-h-d2 i{
      color: #629DE3;
      font-size: 22px; 
      float: left;
      margin-top: 10px;
  }
  .parg-h-d2 span{
      float: left;
      color: white;
      font-size: 14px;
      margin-left: 10px;
      margin-top: 13px;
  }
  .parg-h-d2 a{
      float: left;
      color: #629DE3;
      font-size: 14px;
      margin-left: 10px;
      margin-top: 13px;
      cursor: pointer;
  }
  .ss1{
      padding: 13px 15px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
  }
  .ss1 i{
      color: #5D676C;
      font-size: 14px;
      float: left;
  }
  .ss1 span{
      color: #434B4D;
      font-size: 14px;
      float: left;
      margin-left: 7px;
      margin-top: -2px;
  }
  .sdiv{
     padding: 0px 15px;  
     padding-right: 0px;
     height: auto;
     overflow: hidden;
     transition: all .5s;
     -moz-transition: all .5s;
     -webkit-transition: all .5s;
     -o-transition: all .5s;
  }
  .ss2{
     padding: 13px 15px;
      border-bottom: 1px solid #ccc;
      cursor: pointer; 
  }
  .ss2:hover{
      background-color: #409EFF;
  }
  .ss2 i{
      color: #5D676C;
      font-size: 14px;
      float: left; 
  }
  .ss2 span{
      color: #434B4D;
      font-size: 14px;
      float: left;
      margin-left: 7px;
      margin-top: -2px; 
  }
  .el-tabs__item{
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      background-color: #B9B9B9;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
      padding-left: 10px;
      padding-right: 10px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
     background-color: #0F7E0F;
     font-size: 12px;
     color: #ffffff;
  }
</style>
<template>
  <div class="parg-main">
     <el-container style="width: 100%;height: 100%">
      <el-header id="parg-head" style="height: 46px">
          <div class="parg-h-d1"><i class="fa fa-star-o bicon" aria-hidden="true"></i><span>计费系统</span></div>
          <div class="parg-h-d2">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
              <span>账号：{{username}}</span>
              <a @click="exit">退出</a>
              <a @click="changePassword">修改密码</a>
          </div>
      </el-header>
      <el-container>
      <!--左边的菜单-->
      <el-aside width="200px" id="parg-left">
          <template v-for="(sds,index) in sides">
            <div class="ss1" @click="clickSide($event,index)"><i :class="sds.meta.icon"></i><span>{{sds.name}}</span><i class="fa fa-chevron-down fac" style="float:right" v-if="sds.children"></i><div style="clear:both"></div></div>
            <el-collapse-transition>
             <div class="sdiv" v-if="sds.children" v-show="sds.meta.canc">
               <div class="ss2" v-for="(sc,index) in sds.children" :style="editableTabsValue == sc.meta.pathFull?'background-color:#409EFF':''" @click="clickSideA(sc)" v-show="sc.meta.tag == 1">
                   <i :class="sc.meta.icon" :style="editableTabsValue == sc.meta.pathFull?'color:#fff':''"></i>
                   <span :style="editableTabsValue == sc.meta.pathFull?'color:#fff':''">{{sc.name}}</span>
                   <div style="clear:both"></div>
               </div> 
             </div>
            </el-collapse-transition>
          </template> 
      </el-aside>
       <el-main id="parg-cont">
          <!--右边的菜单--> 
          <div class="parg-cont-d1">
              <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="gotoPath">
                <el-tab-pane
                  v-for="(item, index) in rightTags"
                  :key="item.pathFull"
                  :label="item.name"
                  :name="item.pathFull"
                >
               </el-tab-pane>
              </el-tabs>
          </div> 
          <div class="app-main">
             <transition name="fade" mode="out-in">
               <!-- <router-view :key="key"></router-view> -->
               <router-view></router-view>
             </transition>
          </div>
       </el-main>
      </el-container>
     </el-container>
      <!--查看详情的界面-->
      <el-dialog 
        title="修改密码" 
        :visible.sync="dialogVisible"
        close-on-press-escape
        :before-close="dialogSave"
         width="360px">
         <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="74px" class="demo-ruleForm">
          <el-form-item label="旧密码" prop="oldPass">
           <el-input type="password" v-model="ruleForm2.oldPass" clearable auto-complete="off"></el-input>
          </el-form-item>   
          <el-form-item label="新密码" prop="pass">
           <el-input type="password" v-model="ruleForm2.pass" clearable auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
           <el-input type="password" v-model="ruleForm2.checkPass" clearable auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
         </el-form>
        <div slot="footer" class="dialog-footer">
         <!-- <el-button @click.native="dialogVisible = false">取消</el-button> -->
       </div>
      </el-dialog>
  </div>
</template>
<script>
import APIS from '../utils/apis'
let vm;
export default {
  data() {
    var  validateOldPass = (rule, value, callback) => {
          if(value === ''){
              callback(new Error('请输入原密码'));
          }else{
              callback();
          }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
          editableTabsValue: '/pargross/merchantDetail/companyList',
          tabIndex: 1,
          ruleForm2: {
            oldPass: '',
            pass: '',
            checkPass: ''
          },
          rules2: {
           oldPass: [
               { validator: validateOldPass, trigger: 'blur' }
           ], 
           pass: [
             { validator: validatePass, trigger: 'blur' }
           ],
           checkPass: [
             { validator: validatePass2, trigger: 'blur' }
           ]
          },
          username: "",
          sides: this.asides,
          rightTags: [],
          dialogVisible: false
      }
  },
  mounted() {
    vm = this;
    APIS.checkLogin().then(res => {
        if(res.code == 0) {
           vm.username = res.data;
        }
    })
    vm.beginShow();
  },
  methods: {
      //刚进入界面的效果
      beginShow() {
         vm.sides[0].meta.canc = true;
         $(".fac").eq(0).removeClass("fa fa-chevron-down");
         $(".fac").eq(0).addClass("fa fa-chevron-up");
         let tab = {
             name: vm.sides[0].children[0].name,
             pathFull: vm.sides[0].children[0].meta.pathFull,
             self: true
         }
         vm.rightTags.push(tab);
         vm.$router.push({path:'/pargross/merchantDetail/companyList'})
      },
      //退出登入
      exit() {
        APIS.signOut().then(res => {
            if(res.code == 0){
                vm.$message({
                     message: res.msg,
                     type: 'success',
                     duration: 300,
                     onClose: () => {
                        vm.$router.push({path:"/"}) 
                     }
                   });
            }
            
        })
      },
      //点击左边的效果
      clickSide(e,n) {
          let _this =$(e.target);
          let ist = _this.find(".fa-chevron-down");
           //判断是否下滑
          if(ist){
           let it =  vm.sides[n].meta.canc;
           if(it){
              vm.sides[n].meta.canc = false; 
              $(".fac").eq(n).removeClass("fa fa-chevron-up");
              $(".fac").eq(n).addClass("fa fa-chevron-down");
           }else{
              vm.sides[n].meta.canc = true;
              $(".fac").eq(n).removeClass("fa fa-chevron-down");
              $(".fac").eq(n).addClass("fa fa-chevron-up");
              for(let i = 0; i < vm.sides.length; i++) {
                  if(i == n) {
                      continue;
                  }else{
                      vm.sides[i].meta.canc = false;
                      $(".fac").eq(i).removeClass("fa fa-chevron-up");
                      $(".fac").eq(i).addClass("fa fa-chevron-down");
                  }
              }
           }
          }else{
            //不下滑时的效果
            if(vm.sides[n].meta.tag == 1){
                let tab = {
                    name: vm.sides[n].name,
                    pathFull:  vm.sides[n].meta.pathFull,
                    self: true
                }
                let treu = vm.rightTags.find(ele => {
                    return ele.name == tab.name;
                })
                if(!treu){
                  for(let i = 0; i < vm.rightTags.length; i++){
                     vm.rightTags[i].self = false;
                  }  
                  vm.rightTags.push(tab); 
                }else{
                   let x =  vm.rightTags.findIndex(ele => {
                      return ele.name == tab.name;
                   });
                   for(let i = 0; i < vm.rightTags.length; i++){
                     vm.rightTags[i].self = false;
                   }
                   vm.rightTags[x].self = true;
                }
                vm.$router.push({path:tab.pathFull})
            }
          }
          

      },
      //点击左边的效果
      clickSideA(obj){
         if(obj.meta.tag == 1){
             let tab = {
                name: obj.name,
                self: true,
                pathFull: obj.meta.pathFull
             }
             let treu = vm.rightTags.find(ele => {
                 return ele.name == tab.name;
             })
             vm.editableTabsValue = obj.meta.pathFull;
             if(!treu){
               for(let i = 0; i < vm.rightTags.length; i++){
                   vm.rightTags[i].self = false;
               }
               vm.rightTags.push(tab);
               vm.$router.push({path:tab.pathFull});
             }else{
                let n =  vm.rightTags.findIndex(ele => {
                    return ele.name == tab.name;
                });
                for(let i = 0; i < vm.rightTags.length; i++){
                   vm.rightTags[i].self = false;
                }
                vm.rightTags[n].self = true;
                vm.$router.push({path:vm.rightTags[n].pathFull});
             }
             
         }
         
      },
      //点击修改密码
      changePassword() {
          vm.dialogVisible = true;
      },
      //提交修改密码
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            APIS.updatePassword(vm.ruleForm2.oldPass,vm.ruleForm2.pass).then(res => {
                if(res.code == 0) {
                     vm.$message({
                       message: '密码修改成功',
                       type: 'success',
                       onClose: function() {
                           vm.resetForm('ruleForm2');
                           vm.dialogVisible = false;
                       }
                      });
                }else{
                     vm.$message({
                       message: res.msg,
                       type: 'warning'
                      });
                }  
              }).catch(err => {
                   vm.$message.error('出现错误，请稍后重试');
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置的功能
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      dialogSave(done) {
        vm.resetForm('ruleForm2');
        done();
      },
      //点击X的效果
      removeTab(targetName){ 
        let tabs = this.rightTags;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.pathFull === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.pathFull;
                vm.$router.push({path:activeName});
              }
            }
          });
       }
        this.editableTabsValue = activeName;
        this.rightTags = tabs.filter(tab => tab.pathFull !== targetName);
     },
     //点击标签栏的效果
     gotoPath(target){
         vm.$router.push({path:target.name});
     }
  }
}
</script>


