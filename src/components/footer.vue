<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to='/'>首页</router-link>
      </li>
      <li>
        <router-link to='/manage'>人员管理</router-link>
      </li>
      <li>
        <router-link to='/information'>详情</router-link>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
  .nav {
    bottom: 0;
    padding: 0px;
    margin: 0px;
    width: 100%;
    position: fixed;
    list-style: none;
  }

  .nav li {
    display: inline;
    float: left;
    color: aqua;
    background-color: rgb(233, 217, 173);
    padding: 0px;
    margin: 0px;
    width: 33%;
  }

  .nav li a:link,
  a:visited {
    text-decoration: none;
    font-weight: bold;
  }

  .nav li a:hover,
  a:active {
      background-color: rgb(85, 226, 109);
  }

</style>
