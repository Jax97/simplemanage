<template>
  <div>
    <p>这是首页</p>
    <button v-on:click="getJavaScript">get</button>
    <p>{{books}}</p>
    <button @click="postUser">post</button>
    <p> msg</p>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import FootNav from '../components/footer.vue'
  export default {
    components: {
      FootNav
    },
    data() {
      return {
        msg: '',
        books: ''
      }
    },
   /* mounted() {
      this.getinfo();
    },*/
    methods: {
     /* getinfo() {
        this.axios.get('/static/test.json').then((response) => {
          this.msg = response.data
        })
      },*/
      getJavaScript: function () {
        console.log("you click search!");
        this.axios.get('../../static/test.json').then(function (response) {
          this.books = response.data.title
        }.bind(this))
      },
      postUser: function () {
        this.axios.post('simplemanage/static/user', {
          firstName: 'Huang',
          lastName: 'Jax'
        }).then(function (response) {
          console.log(response);
        })
      }
    }
  }

</script>

<style></style>
