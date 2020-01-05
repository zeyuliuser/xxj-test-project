<template>
<div style="width:80%;">
  <el-table
    :data="tableData"
    style="margin-left:40px;">
    <el-table-column
      label="id"
      width="100">
      <template slot-scope="scope">
        <i class="el-icon-notebook-1"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="年龄"
      width="100">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.age }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="职业"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.vocation }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="地址"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="性别"
      width="100">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.sex}}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="电话"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.mobile}}</span>
      </template>
    </el-table-column>

    
    

  </el-table>

</div>
</template>

<script>
  export default {
    data() {
      return {
        sendComIndex:null,
        tableData: []
      }
    },
    mounted(){
      this.$axios.post('/serv/query', {
	"name":localStorage.getItem("name")}
).then(res=>{
  console.log(res)
  this.tableData =res.data.output.content;
})
    },
    watch:{
      tableData(data1){
        console.log(data1);
      }
    },
    methods: {
      handleEdit(index,row) {
        this.sendComIndex={
          id:row.id,
          courseId:row.courseId,
          servUserId:row.servUserId,
          courseName:row.courseName,
        }

        this.dialogFormVisible=true;
        
        console.log(index,row);
      },
      handleDelete(index,row) {
        this.tableData.splice(index,1);
        this.$axios.post('/serv/deleteSelCourse',{id:row.id}).then(res=>{
          console.log(res);
        })
        console.log(index,row);
      },
      send(){
        this.sendComIndex['comment'] = this.form.name;
        this.sendComIndex['createTime'] = Date.now();
        let sendData = this.sendComIndex;
        this.$axios.post('/serv/publishComment',sendData).then(res=>{
          console.log(res);
        })
        this.dialogFormVisible = false;
      }
    }
  }
</script>