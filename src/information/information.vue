<template>
  <div>
    <el-table :data='managePerson'>
      <el-table-column label="姓名" prop="name">
      </el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="电话号码" prop="phonenumber"></el-table-column>
      <el-table-column label="身份证号码" prop="idnumber"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="个人住址" prop="address"></el-table-column>
    </el-table>
    <foot-nav></foot-nav>

  </div>
</template>

<script>
  import FootNav from '../components/footer.vue'
  export default {
    data() {
      return {
        managePerson: [{
            name: '张三',
            sex: '男',
            phonenumber: '1008611',
            idnumber: '201810190043',
            email: 'vue@v.com',
            address: '深圳市'
          },
          {
            name: '李四',
            sex: '女',
            phonenumber: '1008612',
            idnumber: '201810190045',
            email: 'vue@v.com',
            address: '广州市'
          }
        ]
      }
    }
  }

</script>

<style>
</style>
