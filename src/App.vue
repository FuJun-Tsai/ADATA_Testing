<template>
  <div id="nav" class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex align-items-center">
          <router-link class="me-auto" to="/home">
            <img src="./assets/images/logo.png" alt="">
          </router-link>
          <router-link class="p-4" to="/news">News</router-link>
          <router-link class="p-4" to="/prizes">Prizes</router-link>
          <router-link class="p-4" to="/winners">Winners</router-link>
          <!-- <button>Language</button> -->
        </div>
      </div>
    </div>
  </div>
  <router-view/>
  <footer class="p-4">
    <p class="text-center m-0">Copyright © 2019 ADATA Technology Co., Ltd All rights reserved</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      Language: [],
    };
  },
  methods: {
    getInfo() {
      this.axios.get('./assets/lang/tw.php').then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    // this.getInfo();
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
*{
  box-sizing: border-box;
}

#nav{
  background: #80808077;
  a{
    color: #fff;
    text-decoration: none;
  }
}

body{
  background: url('./assets/images/bg_all.jpg');
  background-size: cover;
}

footer{
  background: url('./assets/images/home/bg_footer.jpg');
  background-size: cover;
}

img{
  width: 100%;
}
</style>
