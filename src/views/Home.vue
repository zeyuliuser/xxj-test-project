
<template>
<div>

   <div class="header">
     <el-radio-group v-model="isCollapse" class="group">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
     </el-radio-group>
     <div class="info">
       <span style="color:rgb(255,255,255);">admin:{{admin}}</span>
       <span style="color:rgb(255,255,255); margin-left:20px;margin-right:20px;">登录角色:{{role}}</span>
       <span style="color:rgb(255,255,255); margin-left:20px;margin-right:20px;cursor:pointer" @click="clearInfo()">退出登录</span>
     </div>
    </div>

   <div class="container">
     <div class="teacher" v-if="state == 0">
    <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="1">
        <i class="el-icon-s-order"></i>
        <span slot="title">我的课程列表</span>
      </el-menu-item>
   
      <el-menu-item index="2">
        <i class="el-icon-s-claim"></i>
        <span slot="title">新增课程</span>
      </el-menu-item>

 <el-submenu index="3">
      <template slot="title">
      <i class="el-icon-user-solid"></i>
      <span slot="title">个人中心</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="3-1">修改个人信息</el-menu-item>
    </el-menu-item-group>
 </el-submenu>
     </el-menu>
     </div>

     <div class="student" v-if="state == 1">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

     <el-menu-item index="1">
        <i class="el-icon-star-on" @click="goClass()"></i>
        <span slot="title" @click="goClass()" >查看收藏课程</span>
      </el-menu-item>
   
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"  >查看课程评论</span>
      </el-menu-item>

 <el-submenu index="3">
      <template slot="title">
      <i class="el-icon-user-solid" @click="goPerson()"></i>
      <span slot="title" >个人中心</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="3-1" @click="goPerson()">修改个人信息</el-menu-item>
    </el-menu-item-group>
 </el-submenu>
     </el-menu>
     </div>

     <div class="ops" v-if="state == 2">
    <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
       <el-menu-item index="1">
        <i class="el-icon-star-on"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
   
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">系统用户管理</span>
      </el-menu-item>

     </el-menu>
     </div>
   <router-view/>
  </div>
</div>
</template>


<style scoped>
.header{
  background-color: #409EFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
border-radius:4px 0 0 4px;
}
.container{
  display: flex;
}
.info{
  text-align: right;
}
.group{
  /* position: relative;
  left: -600px; */
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        admin:localStorage.getItem("name"),
        role:"学生",
        state:1,
        isCollapse: true
      };
    },
    methods: {
      clearInfo(){
        localStorage.removeItem("name");
        localStorage.removeItem("servUserId");
        this.$emit('down');
      },    
      goClass(){
        this.$router.push('/')
      },
      goPerson(){
        this.$router.push('/person')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>