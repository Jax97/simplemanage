<template>
  <div>
    <h1>请填写你的个人信息</h1>
    <div class="manage">
      <form action="">
        <div class="block">
          <label for="username">姓名:</label>
          <input type="text" placeholder="" name="username" id="username">
        </div>
        <div class="block">
          <label for="male">男</label>
          <input type="radio" name="sex" id="male">
          <label for="female">女</label>
          <input type="radio" name="sex" id="female">
        </div>
        <div class="block">
          <label for="phonenumber">电话号码:</label>
          <input type="text" name="phonenumber" placeholder="请输入13位电话号码" id="phonenumber">
        </div>
        <div class="block">
          <label for="idnumber">身份证号码:</label>
          <input type="text" name="idnumber" placeholder="" id="idnumber">
        </div>
        <div class="block">
          <label for="email">邮箱:</label>
          <input type="text" name="email" placeholder="" id="email">
        </div>
        <div class="block">
          <label for="address">个人住址:</label>
          <input type="text" name="address" placeholder="" id="address">
        </div>
      </form>
    </div>
    <div class="submit">
      <button>提交</button>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import FootNav from '../components/footer.vue'
  export default {
    components: {
      FootNav
    }
  }

</script>

<style>
  .manage {
    width: 500px;
    margin: 0 auto;
    margin-top: 30px;

    
  }

  .block {
    width: 500px;
    margin: 5px 0;
  }

  label {
    display: inline-block;
    text-align: right;
    width: 100px;
  }

  .submit {
    padding: 10px;
    text-align: center;
  }

</style>
