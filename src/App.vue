<template>
  <div id="app">
    <div id="nav" v-if="!login">
       <div class="loginFormSize">
         <div class="loginForm">
          <span style="margin:40px 20px;">网上课堂微服务系统</span>
          <el-input class="input" placeholder="请输入用户名" v-model="account" ></el-input>
          <el-input class="input" placeholder="请输入密码" v-model="password" show-password></el-input>
  
          <el-button style="margin-top: 20px;" type="primary" @click="loginMethod()">登录</el-button>
          <a href="#" @click="dialogFormVisible=true" >没有账号？去注册</a>
         </div>
          
       </div>
      
    </div>
    <el-dialog title="注册" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="姓名">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="地址">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="学号">
      <el-input v-model="form.id" autocomplete="off"></el-input>
    </el-form-item>

   
    <el-form-item label="年龄">
      <el-input v-model="form.age" autocomplete="off"></el-input>
    </el-form-item>

    
    <el-form-item label="职业">
      <el-input v-model="form.vocation" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="性别">
      <el-input v-model="form.sex" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="电话">
      <el-input v-model="form.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="setter()">注 册</el-button>
  </div>
</el-dialog>
    <div v-if="login">
    <Home @down="down()"></Home>
    </div>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  components:{
    Home
  },
  data(){
    return {
      account:'',
      password:'',
      login:false,
      dialogFormVisible:false,
      form:{
        name:"",
        id:"",
        age:"",
        vocation:"",
        address:"",
        sex:"",
        mobile:""
      }
    }
  },
  mounted(){
    if(localStorage.getItem("name")){
      this.login=true;
    }
  },
  methods:{
    setter(){
      this.$axios.post('/serv/save',this.form).then(res=>{
        console.log(res);
      })
      this.dialogFormVisible =false;
    },
    down(){
      this.login = false;
    },
    loginMethod(){
      this.$axios.post("/serv/query",{
        name:this.account,
        password:this.password
      }).then(res=>{
        console.log(res);
        if(res.data.output.content.length!==0){
          this.login = true;
          localStorage.setItem("name",res.data.output.content[0].name);
          localStorage.setItem("servUserId",res.data.output.content[0].id);
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.loginFormSize{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border-radius: 25px;
  border:1px solid #2c3e50;
}
.loginForm a{
  align-self:flex-start;
  text-align: left;
  text-decoration-line: none;
}
.loginForm{
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
}
.input{
  margin-top: 20px;
}
</style>
