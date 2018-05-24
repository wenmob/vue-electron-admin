<style>
  @import url('../../style/index');
  #loginMain{
      background-color: #2A323E;
  }
  .login-container{
      position: relative;
      width: 100%;
      margin: 0 auto;
      height: 100%;
  }
  .login-dd{
      position: absolute;
      width: 340px;
      height: 416px;
      background-color: #fff;
      margin: 0 auto;
      left: 50%;
      margin-left: -170px;
      top: 50%;
      margin-top: -200px;
      -webkit-box-shadow:0 0 10px #2A323E;  
      -moz-box-shadow:0 0 10px #2A323E;  
      box-shadow:0 0 10px #2A323E;
  }
  .login-dd-h1{
      color: #3189ED;
      font-size: 18px;
      margin-top:30px;
      
  }
  .login-dd-p1{
      font-size: 15px;
      color: #A3A4C5;
      margin-top: 5px;
  }
  .login-ruleForm{
      margin-top: 40px;
  }
  .login-foot{
      width: 230px;
      margin-top: 30px;
  }
  .login-foot-a{
      font-size: 14px;
      color: #5F5F5F;
      display: inline-block;
      cursor: pointer;
  }
</style>
<template>
   <div class="cad-main" id="loginMain">
     <div class="login-container">
        <div class="login-dd" align="center">
            <h3 class="login-dd-h1">计费系统</h3>
            <p class="login-dd-p1">v1.0</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="66px" class="login-ruleForm">
              <el-form-item label="账号" prop="username" style="width:240px">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" style="width:240px">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code" style="width:240px">
                     <el-input type="text" v-model="ruleForm.code"></el-input>
              </el-form-item>
              <el-form-item label="" style="width:240px">
                <img :src="uri" width="100%" height="34" style="border:1px solid #ccc" @click="codeFun"/>
              </el-form-item>
              <el-form-item>
                 <el-button type="primary" style="float:right;margin-right:50px" @click="submitForm('ruleForm')">登录</el-button>
                 <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              </el-form-item>
             </el-form>
             <!--忘记密码-->
             <!-- <div class="login-foot">
               <a class="login-foot-a" style="float:left" @click="forget">忘记密码？</a>
               <a class="login-foot-a" style="float:right;color:#409EFF" @click="signRe">注册</a>
             </div> -->
        </div>
     </div>
   </div>
</template>
<script>
import APIS from '../../utils/apis'
import {base_url} from '../../utils/auth'
let vm;
export default {
  data() {
      return {
        ruleForm: {
           username: "",
           password: "",
           code: "",
           ncode: "2245"
        },
        rules: {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            code: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ]
        },
        uuid: '',
        uri:''
      }
  },
  mounted() {
    vm = this;
    vm.listerEnter();
    vm.codeFun();
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            APIS.login(vm.ruleForm.username,vm.ruleForm.password,vm.uuid,vm.ruleForm.code).then(res => {
                if(res.code == 0) {
                    vm.$router.push({path:"/pargross",query:{username: vm.ruleForm.username}})
                }else{
                  vm.$message({
                    message: res.msg,
                    type: 'warning',
                     onClose: () => {
                       vm.codeFun();  
                     }
                  });
                }

            }).catch(err => {
               vm.$message({
                    message: '出现错误，请稍后重试',
                    type: 'warning'
                });
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
      forget() {
        this.$router.push({path:"/updatePassword"}) 
      },
      signRe() {
        this.$router.push({path:"/register"})   
      },
      //生成uuid
      uuidFun(){
          let s = [];
          let hexDigits = "0123456789abcdef";
          for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }
          s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
          s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
          s[8] = s[13] = s[18] = s[23] = "-";
          let uuid = s.join("");
          vm.uuid = uuid;
      },
      //监听enter键
      listerEnter() {
          document.onkeydown = function (event) {
            let e = event || window.event;
            if (e && e.keyCode == 13) { //回车键的键值为13
             vm.submitForm('ruleForm') //调用登录按钮的登录事件
            }
          }; 
      },
      //点击验证码的功能
      codeFun() {
         vm.uuidFun();
         vm.uri = base_url + '/user/code?uuid='+vm.uuid;  
    
      }
  }
}
</script>


