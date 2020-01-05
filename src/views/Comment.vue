<template>
<div style="width:80%;">
  <el-table
    :data="tableData"
    style="margin-left:40px;">
    <el-table-column
      label="课程名称"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-notebook-1"></i>
        <span style="margin-left: 10px">{{ scope.row.courseName }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="创建时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>

    
    <el-table-column label="操作" style="width:40px;">
      <template slot-scope="scope">      
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      this.$axios.post('/serv/selectCourseQuery', {
	"servUserId":2
}
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