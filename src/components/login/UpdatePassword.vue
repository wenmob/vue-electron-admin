<style>
  @import url('../../style/index');
  #loginMain{
      background-color: #2A323E;
  }
  .login-container{
      position: relative;
      width: 1100px;
      margin: 0 auto;
      height: 100%;
  }
  .login-dd{
      position: absolute;
      width: 340px;
      height: 400px;
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
            <p class="login-dd-p1">This is for the administrator</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="66px" class="login-ruleForm">
              <el-form-item label="账号" prop="username" style="width:240px">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="password" style="width:240px">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code" style="width:240px">
                 <el-col :span="12">
                     <el-input v-model.number="ruleForm.code"></el-input>
                 </el-col> 
                 <el-col :span="10" :offset="2">
                     <el-input v-model.number="ruleForm.ncode" :disabled="true"></el-input>
                 </el-col> 
              </el-form-item>
              <el-form-item>
                 <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                 <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
             </el-form>
             <!--忘记密码-->
             <div class="login-foot">
               <a class="login-foot-a" style="float:right;color:#409EFF" @click="signIn">前往登入></a>
             </div>
        </div>
     </div>
   </div>
</template>
<script>
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
        }
      }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      signIn() {
        this.$router.push({path:"/"}) 
      }
  }
}
</script>


